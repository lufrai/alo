import {
  Store,
  ActionResolver,
  BatchActionResolverDecorator,
  typeMutator,
  BatchActionNormalizerDecorator,
  dispatchBatch,
  ActionNormalizer,
  DateActionNormalizerDecorator,
  createUndoableMutator,
  notify,
  UndoableActionNormalizerDecorator,
  setUndoData,
  getUndoData,
  createUndoThunk,
  createRedoThunk,
  ActionResolverInterface,
  UndoableMutatorState,
  setProp,
  removeProp,
  computedProps,
  observe
} from "@lib/alo/main/core";
import { attachStoreToDevtools, Devtools } from "@lib/alo/devtools";

import { el, setChildren, list } from "@lufrai/redom";
import { ObservingListItem } from "@lib/alo/main/redom";

let actionNormalizer = new ActionNormalizer();
actionNormalizer = new DateActionNormalizerDecorator({ actionNormalizer });
actionNormalizer = new UndoableActionNormalizerDecorator({ actionNormalizer });
actionNormalizer = new BatchActionNormalizerDecorator({ actionNormalizer });

let actionResolver: ActionResolverInterface = new ActionResolver();
actionResolver = new BatchActionResolverDecorator({ actionResolver });

let ids = 0;
const createPerson = () => ({
  type: "create",
  payload: {
    id: ids++,
    name: "name" + (ids - 1),
    surname: "surname" + (ids - 1)
  },
  meta: {
    pure: true
  }
});

const createInitialState = (): {
  notperson: {};
  person: { [key: string]: { id: string; name: string; surname: string } };
  undo: UndoableMutatorState;
} => ({
  notperson: {},
  person: {},
  undo: undefined as any
});

const UNDO_ID = "personsCreateUndo";
const undoableMutator = createUndoableMutator({
  id: UNDO_ID,
  actionFilter: action => action.type === "create"
});

const store = new Store({
  actionResolver,
  actionNormalizer,
  mutator: typeMutator(
    (
      state: ReturnType<typeof createInitialState> = createInitialState(),
      action
    ) => {
      switch (action.type) {
        case "create":
          if (action.meta.do) {
            const id = action.payload.id;
            setProp(state.person, id, action.payload, true);
            notify(state, "person");
            setUndoData(action, "person", id);
          } else if (action.meta.undo) {
            const id = getUndoData(action, "person");
            removeProp(state.person, id);
            notify(state, "person");
          }

          break;

        case "surname":
          state.person[action.payload.id].surname = action.payload.surname;
          break;
      }

      state.undo = undoableMutator(state.undo, action);

      return state;
    }
  )
});

let computedCalcs = 0;
const computed = computedProps({
  personCount: function() {
    computedCalcs++;
    return Object.keys(store.getState().person).length;
  },
  personCountX2: function(obj) {
    computedCalcs++;
    return obj.personCount * 2;
  },
  personCountNegative: function(obj) {
    computedCalcs++;
    return obj.personCount - obj.personCountX2;
  }
});

const personCountEl = el("pre");
observe(() => {
  personCountEl.textContent =
    "Computed props: " +
    JSON.stringify({
      calculations: computedCalcs,
      results: computed
    }) +
    " " +
    Math.random();
});

class PersonListItem extends ObservingListItem {
  el = el("li");
  constructor() {
    super();
    const self = this;
    this.observe(function() {
      self.el.textContent =
        JSON.stringify(self.state.item) + " " + Math.random();
    });
  }
}

const personsEl = list("ul", PersonListItem, "id");

const view: any = {};
const app = el("div", [
  (view.count = el("input", { value: 1, size: 3 })),
  el(
    "button",
    {
      onclick: () => {
        const count = view.count.value;
        if (count > 1) {
          dispatchBatch(store, function(ds) {
            for (var idx = 0; idx < count; idx++) {
              ds.dispatch(createPerson());
            }
          });
        } else {
          store.dispatch(createPerson());
        }
      }
    },
    "Add person"
  ),
  el(
    "button",
    { onclick: () => dispatchBatch(store, createUndoThunk(UNDO_ID)) },
    "Undo"
  ),
  el(
    "button",
    { onclick: () => dispatchBatch(store, createRedoThunk(UNDO_ID)) },
    "Redo"
  ),
  personCountEl,
  personsEl
]);

const devToolsEl = el("div.dev");
setChildren(document.querySelector("#app")!, [app, devToolsEl]);

const forceDevtools = true;

if (forceDevtools || process.env.NODE_ENV === "development") {
  new Devtools({ targetElSelector: "div.dev" });
  attachStoreToDevtools({ store, name: "blub" });
}

store.observe(function(_, avoid) {
  const person = store.getState().person;
  avoid();

  requestAnimationFrame(() => {
    personsEl.update(Object.values(person));
  });
});
