import { useDispatch, useSelector } from "react-redux";
import Header from "../../homePages/header/Header";
import Search from "../search/Search";
import Slides from "../slides/Slides";
import TextLanding from "../textLanding/TextLanding";
import { useEffect } from "react";
import { fetchMoviesAction } from "../../rtk/slices/actionMoviesSlice";
import { fetchMovies } from "../../rtk/slices/slice-moves";
import { fetchadventureMovies } from "../../rtk/slices/adventureMoviesSlice";
import { fetchhorrorMovies } from "../../rtk/slices/horrorMoviesSlice";
import { fetchdramaMovies } from "../../rtk/slices/dramaMoviesSlice";
import Footer from "../../homePages/footer/Footer";

function Films() {
  const movies = useSelector((state) => state.movies);
  const MoviesAction = useSelector((state) => state.action);
  const Moviesadventure = useSelector((state) => state.adventure);
  const Movieshorror = useSelector((state) => state.horror);
  const Moviesdrama = useSelector((state) => state.drama);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesAction());
    dispatch(fetchMovies());
    dispatch(fetchadventureMovies());
    dispatch(fetchhorrorMovies());
    dispatch(fetchdramaMovies());
  }, []);
  return (
    <>
      <div className="landing">
        <Header />
        <Search />
        <TextLanding />
      </div>
      <Slides title={"أفلام جديدة"} movie={movies} />
      <Slides title={"أفلام دراما و رومانسي"} movie={Moviesdrama} />
      <Slides title={"افلام رعب"} movie={Movieshorror} />
      <Slides title={"افلام مغامرة"} movie={Moviesadventure} />
      <Slides title={"أفلام أكشن"} movie={MoviesAction} />
      <Footer />
    </>
  );
}
export default Films;
