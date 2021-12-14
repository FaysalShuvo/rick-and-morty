import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";

function Home() {
  let [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  let { info, results } = data;

  console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api)
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

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
