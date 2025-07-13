export function normalizeWord(typeName: string): string {
  return typeName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
