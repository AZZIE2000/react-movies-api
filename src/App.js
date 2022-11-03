import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleMovie from "./pages/SingleMovie";
function App() {
  const [movies, setMovies] = useState([]);

  // getData = async () => {
  //   const res = await axios("/data");
  //   return await res.json();
  // };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=1`
      )
      .then((res) => {
        const allMovies = res.data.results;
        setMovies(allMovies);
        console.log(allMovies);
      });
  }, []);

  // getData = async () => {
  //   await
  // };

  // const APIURL =
  //   "https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=1";

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<SingleMovie movies={movies} />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </>
  );
}

export default App;
