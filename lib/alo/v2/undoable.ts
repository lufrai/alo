import { actionTypes } from "./store";
import { Action, NewAction } from "./action";
import { createUniqueTag, joinTags } from "./tag";
import { Mutator } from "./mutator";

type ActionFilter = (action: Action) => boolean;

interface UndoableAction extends Action {
  undoData?: {};
}

interface UndoRedoAction extends NewAction {
  _undoableCache?: Action;
}

export const undoData = function(
  action: UndoableAction,
  id: string | number,
  value: any
) {
  action.undoData = action.undoData || {};

  if (action.signals.do) action.undoData[id] = value;

  return action.undoData[id];
};

const setUndoableCache = function(action: UndoRedoAction, value: Action) {
  action._undoableCache = value;
};

const undoActionTypePrefix = "@@undo_";
const redoActionTypePrefix = "@@redo_";

export const PAST_TAG_PREFIX = createUniqueTag();
export const FUTURE_TAG_PREFIX = createUniqueTag();

export const undoAction = function(id) {
  return dispatch => {
    let action: UndoRedoAction = {
      type: undoActionTypePrefix + id
    };
    dispatch(action);
    if (action._undoableCache) {
      dispatch(action._undoableCache);
      delete action._undoableCache;
    }
  };
};

export const redoAction = function(id) {
  return dispatch => {
    let action: UndoRedoAction = {
      type: redoActionTypePrefix + id
    };
    dispatch(action);
    if (action._undoableCache) {
      dispatch(action._undoableCache);
      delete action._undoableCache;
    }
  };
};

type UndoableMutatorState = {
  past: Action[];
  future: Action[];
};

export const createUndoableMutator = function(id, actionFilter?: ActionFilter) {
  const PAST_TAG = PAST_TAG_PREFIX + id;
  const FUTURE_TAG = FUTURE_TAG_PREFIX + id;

  const mutator: Mutator<UndoableMutatorState> = function(
    ctx,
    state = { past: [], future: [] },
    tag
  ) {
    if (ctx.action.type === undoActionTypePrefix + id) {
      // Handle undo

      if (state.past.length === 0) {
        return state;
      }

      const action = state.past.pop();
      ctx.push(joinTags(tag, PAST_TAG));

      if (!action) {
        console.log("this actually happens");
        return state;
      }

      setUndoableCache(ctx.action, {
        ...action,
        signals: { ...action.signals, do: false, redo: false, undo: true }
      });

      state.future.push(action);
      ctx.push(joinTags(tag, FUTURE_TAG));
    } else if (ctx.action.type === redoActionTypePrefix + id) {
      // Handle redo

      if (state.future.length === 0) {
        return state;
      }

      const action = state.future.pop();
      ctx.push(joinTags(tag, FUTURE_TAG));

      if (!action) {
        return state;
      }

      setUndoableCache(ctx.action, {
        ...action,
        signals: { ...action.signals, do: true, redo: true, undo: false }
      });

      state.past.push(action);
      ctx.push(joinTags(tag, PAST_TAG));
    } else {
      // Handle new actions

      if (ctx.action.type == actionTypes.INIT) {
        return state;
      }

      if (ctx.action.signals.undo || ctx.action.signals.redo) {
        return state;
      }

      if (actionFilter && !actionFilter(ctx.action)) {
        return state;
      }

      state.future = [];
      ctx.push(joinTags(tag, FUTURE_TAG));

      state.past.push(ctx.action);
      ctx.push(joinTags(tag, PAST_TAG));
    }

    return state;
  };

  return mutator;
};