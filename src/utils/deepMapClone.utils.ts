function deepCloneMap<TKey, TValue>(map: Map<TKey, TValue>): Map<TKey, TValue> {
  return new Map([...map].map(([key, value]) => [key, structuredClone(value)]));
}

export default deepCloneMap;
