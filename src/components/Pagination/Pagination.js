import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav className="d-flex justify-content-center my-5 pb-0 mb-0">
        <ul className="pagination pagination-sm  text-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Link
              className="page-link"
              to="#"
              onClick={handlePreviousPage}
              aria-label="Previous"
              style={{ minWidth: "48px" }}
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          {pageNumbers.map((num, i) => (
            <li
              key={i}
              onClick={() => handlePageChange(num)}
              className={`page-item ${currentPage === num ? "active" : ""}`}
            >
              <Link className="page-link" to="#" style={{ minWidth: "48px" }}>
                {num}
              </Link>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <Link
              className="page-link"
              to="#"
              onClick={handleNextPage}
              aria-label="Next"
              style={{ minWidth: "48px" }}
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
