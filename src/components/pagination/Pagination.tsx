import {Dispatch, FC, SetStateAction} from 'react';

import {usePagination} from "@/hooks/usePagination";

interface PaginationProps {
  perPageRecords: number;
  totalPageRecords: number;
  enabled: boolean;
  setSkip: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({perPageRecords, totalPageRecords, setSkip, enabled}) => {
  const [totalPages, , , currentPageIndex, displayPage] = usePagination({ perPageRecords, totalPageRecords });

  const handlePageClick = (page: number) => {
    displayPage(page);

    setSkip(page * perPageRecords - perPageRecords + 1);
  };

  return (
    <>
      {enabled && totalPages > 1 &&
        <div className="flex flex-wrap items-center justify-center space-x-4 space-y-4 p-4">
          <button
            onClick={() => handlePageClick(currentPageIndex - 1)}
            disabled={currentPageIndex == 1}
            className={`px-4 mt-4 rounded-md ${
              currentPageIndex === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-gray-500 text-white hover:bg-gray-200 hover:text-gray-500'
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              disabled={currentPageIndex === index + 1}
              className={`px-4 py-2 rounded-md ${
                currentPageIndex === index + 1 ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-white text-gray-500 hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageClick(currentPageIndex + 1)}
            disabled={currentPageIndex === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPageIndex === totalPages ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-gray-500 text-white hover:bg-gray-200 hover:text-gray-500'
            }`}
          >
            Next
          </button>
        </div>
      }
    </>
  );
};

export default Pagination;
