import Films from "./components/filmsPage/film/Films";
import Home from "./components/homePages/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import MovieDetalis from "./components/filmsPage/movie-detalis/Movie-detalis";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Films />} path="/films" />
        <Route element={<Login />} path="/login" />
        <Route element={<MovieDetalis />} path="/films/:movieId" />
      </Routes>
    </>
  );
}

export default App;
