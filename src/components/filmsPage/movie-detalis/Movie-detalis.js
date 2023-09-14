import "./movie-detalis.css";
import "./detils.css";
import Search from "../search/Search";
import { useParams } from "react-router-dom";
import Header from "../../homePages/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesId } from "../../rtk/slices/movieIdSlice";
import { fetchMovies } from "../../rtk/slices/slice-moves";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faThumbsUp,
  faThumbsDown,
  faPaperPlane,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Slides from "../slides/Slides";
import Footer from "../../homePages/footer/Footer";
import Swal from "sweetalert2";
function MovieDetalis() {
  const { movieId } = useParams();
  const Movies = useSelector((state) => state.movies);
  const move = useSelector((state) => state.moiveId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesId(movieId));
    dispatch(fetchMovies());
  }, []);
  const watching = () => {
    Swal.fire({
      title: "Sorry Not Available yet",
    });
  };
  return (
    <div className="movie-detalis">
      <Header />
      <Search />
      <div className="container">
        {move.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="movie-contant pt-5 pb-5 mt-5">
                <div className="img-btn">
                  <img src={movie.image} alt={movie.description} />
                  <a href="#download" className="btn btn-danger">
                    مشاهدة وتحميل <FontAwesomeIcon icon={faCloudArrowDown} />
                  </a>
                </div>
                <table className="text-white-50 table-width">
                  <tbody>
                    <tr>
                      <td colSpan={2}>{movie.name}</td>
                      {/* <td>abo mera </td> */}
                    </tr>
                    <tr>
                      <td>التصنيف </td>
                      <td>افلام افلام اجنبي </td>
                    </tr>
                    <tr>
                      <td>سنة الاصدار </td>
                      <td>2020 </td>
                    </tr>
                    <tr>
                      <td>الجودة </td>
                      <td>WEB-DL </td>
                    </tr>
                    <tr>
                      <td>البلد </td>
                      <td>الولايات المتحدة الأمريكية </td>
                    </tr>
                    <tr>
                      <td>اللغة</td>
                      <td>الانجليزية </td>
                    </tr>
                    <tr>
                      <td>النوع</td>
                      <td>{movie.category}</td>
                    </tr>
                    <tr>
                      <td>الدقة</td>
                      <td>1080P</td>
                    </tr>
                    <tr>
                      <td>تاريخ الاصدار </td>
                      <td>28-july-2020</td>
                    </tr>
                    <tr>
                      <td>مدة العرض </td>
                      <td>120 دقيقة </td>
                    </tr>
                    <tr>
                      <td> المشاهدات </td>
                      <td>245 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="all-contant mt-5">
                <div className="row pt-5 pb-5">
                  <div className="col-reating col col-lg-4 ">
                    <h2 className="col-heeding">تقييم المشاهدين</h2>
                    <div className="divinnnng d-flex align-items-center justify-content-center flex-column p-3">
                      <div className="col-ten text-align-center text-white-50 mb-2">
                        100%
                      </div>
                      <p className="text-align-center text-white-50">
                        من المشاهدين اعجبهم هذا الفلم
                      </p>
                      <div className="row icon text-white-50 d-flex text-align-center">
                        <div className="col-6 col-icon col-md-6  d-flex text-align-center">
                          <FontAwesomeIcon icon={faThumbsUp} />
                          <p>1</p>
                        </div>
                        <div className="col-6 col-icon col-md-6 text-white-50 d-flex text-align-center">
                          <FontAwesomeIcon icon={faThumbsDown} />
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col col-lg-4">
                    <h2 className="col-heeding"> القصة</h2>
                    <div className="divinnnng d-flex align-items-center justify-content-center flex-column p-3">
                      <p className="text-white-50 m-0 p-0 direction-rtl">
                        مشاهدة فيلم {movie.name} مدبلج
                      </p>
                      ;
                      <p className="text-white-50 m-0 p-0 ">
                        {movie.description}
                      </p>
                      ;
                    </div>
                  </div>
                  <div className="col col-lg-4 ">
                    <h2 className="col-heeding">مشاهدة الاعلان (التيلر)</h2>
                    <div className="img-btn">
                      <FontAwesomeIcon
                        icon={faPlay}
                        onClick={() => {
                          watching();
                        }}
                      />
                      <button className="btn btn-danger">
                        انضم لقناة التليجرام
                        <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row pb-5" id="download">
                  <div className="col col-lg-6 ">
                    <h2 className="col-heeding">مشاهدة </h2>
                    <div className="img-btn">
                      <FontAwesomeIcon
                        icon={faPlay}
                        onClick={() => {
                          watching();
                        }}
                      />
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <h2 className="col-heeding"> روابط التحميل </h2>
                    <table className="text-white-50 table-width mb-5">
                      <tbody>
                        <tr>
                          <td>#</td>
                          <td>الجودة </td>
                          <td>الدقة </td>
                          <td>رابط التحميل </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>WEB-DL </td>
                          <td>1080P</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                watching();
                              }}
                            >
                              upbaam
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>WEB-DL </td>
                          <td>720P</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                watching();
                              }}
                            >
                              uppom
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>WEB-DL </td>
                          <td>480P</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                watching();
                              }}
                            >
                              upbaam
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>WEB-DL </td>
                          <td>360P</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                watching();
                              }}
                            >
                              upbaam
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>WEB-DL </td>
                          <td>240P</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                watching();
                              }}
                            >
                              upbaam
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Slides title={"ذات صلة"} movie={Movies} />
      <Footer />
    </div>
  );
}
export default MovieDetalis;
