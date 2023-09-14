import "./watch.css";
import vide from "../media/video-devices.mp4";
function Watch() {
  return (
    <div className="enjoy">
      <div className="container">
        <div className="row box">
          <div className="col-lg-6 col-md-10">
            <h2>Watch everywhere</h2>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="col-lg-6 media col-md-10">
            <div className="media-to">
              <img src="img-app/tv.png" alt=""></img>
              <video src={vide} autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Watch;
