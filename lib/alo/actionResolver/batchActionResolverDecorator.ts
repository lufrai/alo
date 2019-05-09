import { AbstractActionResolverDecorator } from ".";
import { BATCH_ACTION_TYPE, createEvent } from "../main/core";
import { Action } from "../action/types";
import { ResolveOptions } from "./types";

export class BatchActionResolverDecorator extends AbstractActionResolverDecorator {
  _eventByBatchId = {};
  _childsByBatchId = {};

  resolve(options: ResolveOptions) {
    const { store, setAction, applyMutator } = options;

    if (
      !options.action.meta.batchItem &&
      options.action.type !== BATCH_ACTION_TYPE
    ) {
      return this._actionResolver.resolve(options);
    }

    const batchId = options.action.meta.batchId;
    const rootBatchId = options.action.meta.rootBatchId;

    options.action.event = this._eventByBatchId[rootBatchId] =
      this._eventByBatchId[rootBatchId] || createEvent();
    const action: Action = options.action as Action;
    delete action.meta.batchId;
    delete action.meta.rootBatchId;
    delete action.meta.newBatch;
    const parentBatchIds = options.action.meta.parentBatchIds;
    delete action.meta.parentBatchIds;

    if (action.meta.batchItem && action.type !== BATCH_ACTION_TYPE) {
      applyMutator(action);
    }

    if (action.type === BATCH_ACTION_TYPE) {
      action.payload = this._childsByBatchId[batchId];
      delete this._childsByBatchId[batchId];
    }

    if (action.meta.batchItem) {
      if (action.type !== BATCH_ACTION_TYPE && parentBatchIds) {
        for (const parentId of parentBatchIds) {
          this._childsByBatchId[parentId] =
            this._childsByBatchId[parentId] || [];
          this._childsByBatchId[parentId].push(action);
        }
      }

      delete action.meta.batchItem;

      return action;
    }

    delete this._eventByBatchId[batchId];

    setAction(action as Action);
    if (action.event.tagsSet) {
      store._callSubscribers();
    }

    return action;
  }
}
