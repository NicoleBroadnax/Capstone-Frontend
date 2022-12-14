import "./Header.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id="navtext"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="row"> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="Logo">
              <Link className="navbar-brand" to="/">
                <img src="/2.png" alt="Logo" width="200" height="40" />
              </Link>
            </div>
            <div>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/services/mhs">
                        Mental Health Services
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/family">
                        Family & Social Support
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/education">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/employment">
                        Employment & Income
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> */}
          <div className="d-flex">
            <Link to="/login">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Login/Register
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
//<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
