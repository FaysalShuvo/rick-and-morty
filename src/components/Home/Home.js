import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = data;

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setData(data);
    })();
  }, [api]);
  return (
    <div>
      <h1 className="text-center title-text my-3">
        Rick & Morty <span className="text-danger">Library!</span>
      </h1>
      <Search setPage={setPage} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
