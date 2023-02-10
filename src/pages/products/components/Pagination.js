import React, { useState } from "react";
import "../styles/pagination.scss";

const Pagination = ({ pageCount, setCurrentPage, currentPage }) => {
  const [isActive, setIsActive] = useState(false);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <div className='page-container'>
        {pages.map((page, index) => {
          const activeClass = currentPage === page ? "page active" : "page";
          return (
            <div key={index}>
              <div onClick={() => handleClick(page)} className={activeClass}>
                {page}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
