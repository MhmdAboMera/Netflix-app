import "./questions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
function Questions() {
  return (
    <div className="questions">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <ul className="questions-list">
          <li>
            <input type="radio" name="questions-list" id="one" />
            <label htmlFor="one">What is Netflix ?</label>
            <div className="contant">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
                <br></br>
                <br></br>
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="questions-list" id="two" />
            <label htmlFor="two">Where can I watch ?</label>
            <div className="contant">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br></br>
                <br></br>
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="questions-list" id="ididid" />
            <label htmlFor="ididid">How much does Netflix cost ?</label>
            <div className="contant">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from EGP70 to EGP165 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="questions-list" id="four" />
            <label htmlFor="four">How do I cancel ?</label>
            <div className="contant">
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="questions-list" id="five" />
            <label htmlFor="five">How do I cancel ?</label>
            <div className="contant">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="questions-list" id="six" />
            <label htmlFor="six">How do I cancel ?</label>
            <div className="contant">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
                <br></br>
                <br></br>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </p>
            </div>
          </li>
        </ul>
        <div className="text">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="name mb-3 row ">
            <input
              type="email"
              className="col-lg-4 col-md-4"
              id="staticEmail"
              placeholder="Enter Your Email"
            />
            <button className="btn btn-danger col-lg-2 col-md-2">
              Get Started <FontAwesomeIcon icon={faGreaterThan} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Questions;
