import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieRow = ({ title, url }) => {

const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  console.log("Fetching data...");
  axios
    .get(url)
    .then((response) => {
      console.log("Data fetched successfully");
      setMovies(response.data.results);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setLoading(false);
    });
}, [url]);

if (loading) return <div>Loading...</div>;

console.log(movies);

  return (
    <>
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
      <div className="relative flex items-center">
        <div id={`slider`} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        </div>
      </div>
    
    </>
  );
}

export default MovieRow;
