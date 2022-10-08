export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  threshold: number;
  onPageChange: (page: number) => void;
}
