import {
  observable,
  batchStart,
  batchEnd,
  observe,
  unobserve,
  ObserveFn,
} from "alo";
import { StoreInterface, SubscribableInterface } from "alo/store";
import { RedomComponent } from "redom";

export abstract class Observer {
  _subscriptions: { [key: string]: ReturnType<typeof observe> } = {};
  _observeFunctions: ObserveFn[] = [];
  _mounted = false;
  _started = false;

  observe(fn: ObserveFn) {
    const length = this._observeFunctions.push(fn);
    const idx = length - 1;

    if (this._mounted) {
      this._startSubscription(fn, idx);
    }

    return () => {
      this._observeFunctions.splice(idx, 1);
      if (!this._subscriptions[idx]) {
        return;
      }

      unobserve(this._subscriptions[idx]);
      delete this._subscriptions[idx];
    };
  }
  _startSubscription = (fn, idx) => {
    this._subscriptions[idx] = observe(fn);
  };
  startSubscriptions() {
    if (this._started) {
      this.clearSubscriptions();
    }
    this._started = true;
    this._observeFunctions.forEach(this._startSubscription);
  }
  clearSubscriptions() {
    for (const fn of Object.values(this._subscriptions)) {
      if (!fn) continue;
      unobserve(fn);
    }
    this._started = false;
    this._subscriptions = {};
  }
  onmount() {
    this._mounted = true;
    this.startSubscriptions();
  }
  onunmount() {
    this._mounted = false;
    this.clearSubscriptions();
  }
}

export abstract class ObserverListItem<
  I = any,
  C = any,
  ID = any
> extends Observer {
  state = observable({
    index: null as any,
    item: (null as unknown) as I,
    items: (null as unknown) as I[],
    context: (null as unknown) as C,
    initData: (null as unknown) as ID,
  });

  init = true;

  constructor(initData) {
    super();
    this.state.initData = initData;
  }

  update(item, index, items, context) {
    const prevBatch = batchStart();
    this.state.item = item;
    this.state.index = index;
    this.state.items = items;
    this.state.context = context;
    batchEnd(prevBatch);

    if (this.init && this["oninit"]) this["oninit"]();
    this.init = false;
  }
}

export class ConnectedComponent<
  S extends StoreInterface = any,
  T extends RedomComponent = any
> {
  el;
  _mounted = false;
  _component: T;
  _subscription?: ReturnType<
    SubscribableInterface<StoreInterface>["subscribe"]
  >;
  _store;
  _id;
  _filterUpdate;
  constructor({
    store,
    component,
    filterUpdate,
    id,
  }: {
    id?: any;
    store: S;
    component: T;
    // TODO: Implement
    filterUpdate?: (options: { store: S }) => boolean | void;
  }) {
    this._store = store;
    this._id = id;
    this._filterUpdate = filterUpdate;
    this._component = component;
    this.el = component["el"];
  }
  update(options = {}) {
    if (!this._component.update) {
      return;
    }

    (this._component.update as any)(options);
  }
  _storeListener = (store) => {
    if (!this._component.update) {
      return;
    }

    const updateOptions: any = {
      connectId: this._id,
      mounted: this._mounted,
      action: store.getAction(),
    };

    if (this._filterUpdate && !this._filterUpdate(updateOptions)) {
      return;
    }

    requestAnimationFrame(() => {
      (this._component.update as any)(updateOptions);
    });
  };
  onmount() {
    this._mounted = true;
    this._subscription = this._store.subscribe(this._storeListener, true);
    this._mounted = false;

    if (this._component.onmount) {
      this._component.onmount();
    }
  }
  onremount() {
    if (this._component.onremount) {
      this._component.onremount();
    }
  }
  onunmount() {
    if (this._subscription) {
      this._subscription();
      this._subscription = undefined;
    }

    if (this._component.onunmount) {
      this._component.onunmount();
    }
  }
  getChild() {
    return this._component;
  }
}
