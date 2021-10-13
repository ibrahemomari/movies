import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";
import Pagination from "./Pagination";

function Data() {
  const API="https://api.themoviedb.org/3/movie/upcoming?api_key=880cd24d994cf7ba60139550656e326a";
  const [movies, setmovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setmoviesPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let res = await axios.get(API);
      console.log(res.data.results);
      setmovies(res.data.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const indexOfLastmovies = currentPage * moviesPerPage;
  const indexOfFirstmovies = indexOfLastmovies - moviesPerPage;
  const currentmovies = movies.slice(indexOfFirstmovies, indexOfLastmovies);
  console.log(currentmovies);
  const paginate = (pageNumber) => setCurrentPage(pageNumber+1);

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-3">MOVIES</h1>
        <Movies movies={currentmovies} loading={loading} />
        <Pagination
          moviesPerPage={moviesPerPage}
          totalmovies={movies.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Data;
