import React from "react";

function Pagination({ page, setPage }) {
  const nextBtn = () => {
    setPage((pgNmbr) => pgNmbr + 1);
  };
  const prevBtn = () => {
    if (page === 1) return;
    setPage((pgNmbr) => pgNmbr - 1);
  };
  return (
    <div className="container d-flex justify-content-center my-5 gap-4">
      <button onClick={prevBtn} className="btn btn-info">
        Prev
      </button>
      <button onClick={nextBtn} className="btn btn-info">
        Next
      </button>
    </div>
  );
}

export default Pagination;
