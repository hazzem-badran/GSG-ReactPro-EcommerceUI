import { useState } from "react";

type PaginationProps = {
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({ totalPages, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };


  return (
    <div className="flex justify-center items-center  space-x-2 my-16">
      {/* Prev Arrow */}
      <button
        onClick={() => handlePage(Math.max(1, currentPage - 1))}
        className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        disabled={currentPage === 1}
      >
        &#8592;
      </button>
    
      {/* Page Number Buttons */}
      {Array.from({ length: totalPages }, (_, i) => {
        const num = i + 1;
        return (
          <button
            key={num}
            onClick={() => handlePage(num)}
            className={`w-12 h-12 flex items-center justify-center rounded-md border text-xl transition-colors
              ${
                num === currentPage
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {num}
          </button>
        );
      })}
      {/* Next Arrow */}
      <button
        onClick={() => handlePage(Math.min(totalPages, currentPage + 1))}
        className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        disabled={currentPage === totalPages}
      >
        &#8594;
      </button>
    </div>
  );
}
