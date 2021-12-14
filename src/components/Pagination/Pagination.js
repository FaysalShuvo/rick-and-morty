import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ page, setPage, info }) {
  return (
    <ReactPaginate
      pageCount={info?.pages}
      forcePage={page === 1 ? 0 : page - 1}
      className="pagination justify-content-center gap-2 txtUnderline"
      nextLabel="next"
      nextClassName="btn btn-info"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousLabel="previous"
      previousClassName="btn btn-info"
      onPageChange={(data) => {
        setPage(data.selected + 1);
      }}
      activeClassName="active"
    />
  );
}

export default Pagination;
