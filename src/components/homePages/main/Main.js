import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="img-box col-lg-6 col-md-10">
            <img src="img-app/mobile-0819.jpg" alt="textimga" />
            <div className="box">
              <div>
                <img src="img-app/boxshot.png" alt="textimga" />
              </div>
              <div className="text">
                <h4>Stranger Things</h4>
                <p>Downloading...</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faDownLong} />
              </div>
            </div>
          </div>
          <div className="info-text col-lg-6 col-md-10">
            <h2>Download your shows to watch offline</h2>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
