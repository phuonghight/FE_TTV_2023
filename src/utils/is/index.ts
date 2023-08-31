const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function') || is(val, 'AsyncFunction');
}

export const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== 'undefined';
};

export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val);
};

export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object');
};

export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

export function isAsyncFunction<T = any>(val: unknown): val is () => Promise<T> {
  return is(val, 'AsyncFunction');
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export const isWindow = (val: any): val is Window => {
  return typeof window !== 'undefined' && is(val, 'Window');
};

export const isElement = (val: unknown): val is Element => {
  return isObject(val) && !!val.tagName;
};

export function isNull(val: unknown): val is null {
  return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}
