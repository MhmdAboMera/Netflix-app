import "./landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
function Text(props) {
  return (
    <div className="text">
      <h2>Unlimited movies, TV shows, and more</h2>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="name mb-3 row ">
        <input
          type="email"
          className="col-lg-4 col-md-4"
          // id="staticEmail"
          placeholder="Enter Your Email"
        />
        <button className="btn btn-danger col-lg-2 col-md-2">
          Get Started <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </div>
    </div>
  );
}
export default Text;
