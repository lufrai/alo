import { Action, ActionMeta, NewAction } from "../main/core";

export type ActionFilter = (action: Action) => boolean;

export interface UndoableAction extends Action {
  meta: UndoableActionMeta;
}

interface UndoableActionMeta extends ActionMeta {
  tmp: {
    undoData?: {};
  };
}

export interface UndoRedoAction extends Action {
  meta: UndoRedoActionMeta;
}

interface UndoRedoActionMeta extends ActionMeta {
  undoableCache?: NewAction;
}

export type UndoableMutatorState = {
  past: NewAction[];
  future: NewAction[];
};
