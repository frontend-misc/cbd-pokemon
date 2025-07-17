import { useState } from 'react';

function usePagination<T>(items: T[], itemsPerPage = 20) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToPage = (page: number) => {
    if (isPageInRange(page, totalPages)) {
      setCurrentPage(page);
    }
  };

  return {
    currentItems: items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    currentPage,
    totalPages,
    goToPage,
    firstPage: () => goToPage(1),
    lastPage: () => goToPage(totalPages),
  };
}

function isPageInRange(page: number, totalPages: number): boolean {
  return page >= 1 && page <= totalPages;
}

export default usePagination;
