import React from "react";

function Pagination({ postsPerPage, totalposts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalposts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-box mb-5">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => {
                paginate(number);
              }}
              // href=""
              className="active"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
