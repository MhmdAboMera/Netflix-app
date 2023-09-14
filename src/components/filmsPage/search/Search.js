import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../rtk/slices/slice-moves";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Search() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const found = () => {
    Swal.fire({
      title: "Sorry, This Movie Doesn't Exist Currently, Mayby Later",
    });
  };
  const search = () => {
    const move = movies.find((movie) => {
      return movie.name == text;
    });
    if (!move) {
      found();
    }
    if (move) {
      navigate(`/films/${move.id}`);
    }
  };
  return (
    <div className="search">
      <div className="container">
        <div className="row row-search">
          <div className="input-search  ">
            <input
              type="search"
              id="search"
              placeholder="Search In Netflix"
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => [search()]}
            />
          </div>
          <h2 className="logo  ">Netflix</h2>
        </div>
      </div>
    </div>
  );
}
export default Search;
