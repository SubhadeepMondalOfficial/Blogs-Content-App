import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, totalPages, handlerPageChange } = useContext(AppContext);

  return (
    <div className="border-t-2 border-gray-800 fixed bottom-0 left-0 w-full bg-gray-100">
      <div className="max-w-[700px] mx-auto flex justify-between items-center px-3 py-2">
        <div className="flex justify-center items-center gap-6">
          {page < totalPages && (
            <button
              onClick={() => handlerPageChange(page + 1)}
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
            >
              Next
            </button>
          )}

          {page > 1 && (
            <button
              onClick={() => handlerPageChange(page - 1)}
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
            >
              Previous
            </button>
          )}
        </div>
        <div>
          <button>
            Page {page} of {totalPages}
          </button>
        </div>
      </div>
    </div>
  );
}
