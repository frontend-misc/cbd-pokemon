import './pagination.scss';
import { getPageNumbers } from '../../utils/get-page-numbers.utils.ts';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onFirstPage: () => void;
  onLastPage: () => void;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onFirstPage,
  onLastPage,
  siblingCount = 1,
}: PaginationProps) {
  const DOTS = '...';
  const pages = getPageNumbers({ totalPages, currentPage, siblingCount });

  return (
    <div className="pagination">
      <button onClick={() => onFirstPage()} disabled={currentPage === 1}>
        {'<<'}
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {'<'}
      </button>

      {pages.map((page, idx) =>
        page === DOTS ? (
          <span key={idx} className="dots">
            {DOTS}
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(Number(page))}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </button>
        ),
      )}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {'>'}
      </button>
      <button onClick={() => onLastPage()} disabled={currentPage === totalPages}>
        {'>>'}
      </button>
    </div>
  );
}

export default Pagination;
