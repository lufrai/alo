import { Dictionary } from "../util/types";
import { Observable, ObserveFn, AvoidFn } from "./types";
export declare function observe(fn: ObserveFn, notifyInBatches?: string | boolean): () => void;
export declare const removeProp: <T extends any, K extends keyof T>(obj: T, key: K) => void;
export declare const setProp: <T extends any, K extends keyof T>(obj: T, key: K, value: T[K], deep?: boolean) => void;
export declare function observable<T extends Dictionary<any>>(obj: T, deep?: boolean): Observable<T>;
export declare function notify<T extends Observable<any>, K extends keyof T>(obj: T, key: K): void;
export declare const batch: (fn: () => void) => void;
export declare const batchStart: () => void;
export declare const batchEnd: () => void;
export declare function getOriginObject<T>(obj: Observable<T>): T;
export declare const computedProps: <P extends {
    [key: string]: (obj: any, value: any, key: any, avoid: AvoidFn, init: boolean) => any;
}>(propsObj: P, batch?: boolean) => { [K in keyof P]: ReturnType<P[K]>; };
//# sourceMappingURL=index.d.ts.map