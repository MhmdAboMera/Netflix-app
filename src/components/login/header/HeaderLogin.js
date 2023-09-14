import { Link } from "react-router-dom";
function HeaderLogin() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container d-f align-items-center">
          <Link className="navbar-brand logo" to="/">
            Netflix
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default HeaderLogin;
