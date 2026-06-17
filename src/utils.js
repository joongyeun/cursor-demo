/**
 * 배열에서 첫 등장 순서를 유지한 채 중복 요소를 제거한다.
 * @param {unknown} items - 입력 배열
 * @returns {unknown[]} 중복이 제거된 새 배열
 */
export function dedupe(items) {
  if (!Array.isArray(items)) return [];
  return [...new Set(items)];
}
