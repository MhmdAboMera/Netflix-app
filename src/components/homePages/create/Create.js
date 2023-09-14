import "./create.css";
function Create() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="img-box col-lg-6 col-md-10">
            <img src="img-app/kids.png" alt="textimga" />
            {/* <img src="img-app/boxshot.png" alt="textimga" /> */}
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
export default Create;
