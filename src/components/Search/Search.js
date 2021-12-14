import React from "react";
import styles from "./Search.module.scss";

function Search({ setSearch, setPage }) {
  return (
    <form className="d-flex justify-content-center">
      <input
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        placeholder="Just Search ........."
        type="text"
        className="form-control w-50 border-0 mb-4"
      />
    </form>
  );
}

export default Search;
