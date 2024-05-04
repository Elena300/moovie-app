import React from "react";
import Hero from "../Components/Hero";
import MovieRow from "../Components/MovieRow";
import endPoints from "../Services/movieServices";

function Home() {
  return (
    <>
      <Hero />
      <MovieRow title="upcoming" url={endPoints.upcoming} />
      <MovieRow title="popular" url={endPoints.popular} />
    </>
  );
}

export default Home;

//<MovieRow title="topRated" url={endPoints.topRated} />;
