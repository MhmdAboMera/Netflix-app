import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="footer text-white-50">
      <div className="container">
        <div className="heeaing  text-white-50">
          <a href="#" className="text-white-50">
            Questions? Contact us.
          </a>
        </div>
        <div className="row-out  text-white-50">
          <div className="">
            <ul>
              <li>
                <a href="#" className="text-white-50">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <a href="#" className="text-white-50">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <a href="#" className="text-white-50">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lang">
          <button className="lang-btn">
            <FontAwesomeIcon icon={faGlobe} /> English{" "}
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <p>Netflix Egypt</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
