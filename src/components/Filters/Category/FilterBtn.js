import React from "react";
import "./FilterBtn.css";

function FilterBtn({ name, index, items, setStatus, setPage }) {
  console.log("search", setPage);
  return (
    <>
      <div className="form-check">
        <input
          onClick={() => {
            setStatus(items);
            setPage(1);
          }}
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  );
}

export default FilterBtn;
