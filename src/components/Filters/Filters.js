import React from "react";
import Gender from "../Filters/Category/Gender";
import Status from "../Filters/Category/Status";
import Species from "../Filters/Category/Species";

function Filters({ setPage, setStatus }) {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4">filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline mb-4"
      >
        Clear Filter
      </div>

      <div className="accordion" id="accordionExample">
        <Species />
        <Status setStatus={setStatus} setPage={setPage} />
        <Gender />
      </div>
    </div>
  );
}

export default Filters;
