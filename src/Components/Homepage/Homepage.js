import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Homepage.scss";
import Search from "../Search/Search";

const Homepage = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="welcome" id="MHS">
          <p>Nicole is awesome. Yay family!</p>
          <Search />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Link to="/services/mhs">
            <div className="card">
              <img src="Books.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <button className="btn btn-secondary">
                  Mental Health Services
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/services/family">
            <div className="card">
              <img src="Family.avif" className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Family & Social Support</h5>
                <button className="btn btn-primary">
                  Family & Social Support
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="col">
          <div className="card">
            <img src="Books.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <Link className="btn btn-primary" to="/services/mhs">
                Education
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src="Work.avif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Employment & Income</h5>
            <Link className="btn btn-primary" to="/services/employment">
              Employment & Income
            </Link>
          </div>
        </div>
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
