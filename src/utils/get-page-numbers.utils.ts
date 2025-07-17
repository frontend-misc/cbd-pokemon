export function getPageNumbers({
  totalPages,
  currentPage,
  siblingCount,
}: {
  totalPages: number;
  currentPage: number;
  siblingCount: number;
}): (number | string)[] {
  const DOTS = '...';
  const totalPageNumbers = siblingCount * 2 + 5;
  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const firstPagesCount = 2;
  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPagesCount);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

  const showLeftDots = leftSiblingIndex > firstPagesCount;
  const showRightDots = rightSiblingIndex < totalPages - 1;

  const pages: (number | string)[] = [1];
  if (showLeftDots) {
    pages.push(DOTS);
  }
  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    pages.push(i);
  }
  if (showRightDots) {
    pages.push(DOTS);
  }
  pages.push(totalPages);

  return pages;
}
