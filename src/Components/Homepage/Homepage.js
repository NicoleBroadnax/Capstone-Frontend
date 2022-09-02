import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Homepage.scss";
import Search from "../Search/Search";

const Homepage = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="welcome">
          <p>Nicole is awesome. Yay family!</p>
        </div>
        <Search />
      </div>

      <div
        className="col text-center"
      ></div>
      <div className="row row-cols-4">
        <div className="col">
          <Link to="/services/mhs">
            <div className="card h-100">
              <img
                src="Books.jpg
            "
                className="card-img-top"
              />
              <div className="card-body">
                <button className="btn btn-secondary">
                  Mental Health Services
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/services/family">
            <div className="card h-100">
              <img src="Family.avif" className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Family&Social Support</h5>

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
            <img src="Books.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <Link className="btn btn-primary" to="/services/mhs">
                Education
              </Link>
            </div>
          </div>
        </div>
        <Link to="/services/employment">
          <div className="card">
            <img src="Work.avif" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Employment & Income</h5>

              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;

// <div className="col">
//                 <Link to="/services/employment">
//                   <div className="card h-100">
//                     <img src="Work.avif" className="card-img-top" />
//                     <div className="card-body">
//                       <h2 className="card-title">Employment & Income </h2>
//                       <button className="btn btn-primary">Employment</button>
//                     </div>
//                     <div className="card-footer"></div>
//                   </div>
//                 </Link>
//               </div>
