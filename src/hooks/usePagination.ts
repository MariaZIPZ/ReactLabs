import { useState } from "react";

interface PaginationProps {
  perPageRecords: number;
  totalPageRecords: number;
}

export const usePagination = ({ perPageRecords, totalPageRecords }: PaginationProps) => {
  const totalPages = Math.ceil(totalPageRecords / perPageRecords);

  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords - 1);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const displayPage = (pageNumber: number) => {
    setCurrentPageIndex(pageNumber);

    const end_page_index = perPageRecords * pageNumber - 1;
    const start_page_index = perPageRecords * pageNumber - perPageRecords;

    setStartPageIndex(start_page_index);

    if (end_page_index > totalPageRecords) {
      setEndPageIndex(totalPageRecords - 1);
    } else {
      setEndPageIndex(end_page_index);
    }
  };

  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] as const;
};