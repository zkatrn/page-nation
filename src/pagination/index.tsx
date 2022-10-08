import React, { useEffect, useState } from 'react';
import './styles.scss';
import { PaginationProps } from './types';

const Pagination = ({
  currentPage,
  threshold,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    const start = currentPage - threshold;
    const end = currentPage + threshold;

    const _pageList = [];

    for (let i = start; i <= end; i++) {
      if (i > 0 && i < totalPages + 1) {
        _pageList.push(i);
      }
    }

    setPageList(_pageList);
  }, [currentPage, totalPages]);

  return (
    <div className="page-list">
      {currentPage !== 1 && <div onClick={() => onPageChange(1)}>First</div>}
      {currentPage - threshold > 1 ? '...' : ''}
      {!!(currentPage - 1 > 0) && (
        <div onClick={() => onPageChange(currentPage - 1)}>←</div>
      )}
      {pageList.map((page: number, i: number) => (
        <div
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}

      {!!(currentPage + 1 < totalPages) && (
        <div onClick={() => onPageChange(currentPage + 1)}>→</div>
      )}
      {currentPage + threshold < totalPages ? '...' : ''}
      {currentPage !== totalPages && (
        <div onClick={() => onPageChange(totalPages)}>Last</div>
      )}
    </div>
  );
};

export default Pagination;
