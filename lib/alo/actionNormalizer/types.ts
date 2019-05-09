import { StoreInterface, NormalizedAction, Action } from "../main/core";

export type NormalizeOptions = {
  action: NormalizedAction;
  callBack: (action: NormalizedAction) => Action | undefined;
  store: StoreInterface;
};

export interface ActionNormalizerInterface {
  normalize(options: NormalizeOptions): Action | undefined;
}
