import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Homepage.scss";
import Search from "../Search/Search";

const Homepage = () => {
  return (
    <div>
      <div className="container">
        <div className="welcome">
          <p>Nicole is awesome. Yay family!</p>
        </div>
        {/* <Search /> */}
      </div>
      <div className="row">
        <div className="col-4 ">
          <Link to="/services/mhs">
            <div className="card h-100">
              <img
                src="Books.jpg
            "
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mental Health Services </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className="btn btn-primary">
                  Mental Health Services
                </button>
              </div>
              <div className="card-footer"></div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/services/family">
            <div className="card h-100">
              <img src="babyhand.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Family&Social Support</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>

                <button className="btn btn-primary">
                  Family&Social Support
                </button>
              </div>
              <div className="card-footer"></div>
            </div>
          </Link>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <Link className="btn btn-primary" to="/services/mhs">
                Mental Health Services
              </Link>
            </div>
            <div className="card-footer"></div>
            <div className="col">
              <Link to="/services/employment">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Employment & Income </h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <button className="btn btn-primary">Employment</button>
                  </div>
                  <div className="card-footer"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
