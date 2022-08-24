import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <Link className="navbar-brand" to="logo">
              Logo
            </Link>
          </div>
          <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/services/mhs">
                      Mental Health Services
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/services/family">
                      Family & Social Support
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/services/education">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/services/employment">
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
  );
};

export default Header;
