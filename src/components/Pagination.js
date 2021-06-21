import React from "react";

const Pagination = ({ postsPerPage, allPosts, clickNumb }) => {
  const numberOfPages = [];

  for (let i = 1; i < Math.ceil(allPosts / postsPerPage); i++) {
    numberOfPages.push(i);
  }
  return (
    <nav className="pagination">
      {numberOfPages.map((nbm) => (
        <li key={nbm} className="page-item">
          <a onClick={() => clickNumb(nbm)} href="!#" className="page-link">
            {nbm}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
