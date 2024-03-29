import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Homepage.scss";
import Search from "../Search/Search";

const Homepage = () => {
  return (
    <div className="home" id="MHS">
      <Header />
      <div className="text-center">
        <div className="welcome">
          <h1 className="title">Syracuse Impact</h1>
          <h2 className="title2">Family's Helping One Another</h2>

          <div>
            <Search />

            {/* <div className="col-3">
              <div
                style={{
                  height: 300,
                  // width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  borderRadius: 100,
                }}
                className="text-center"
              >
                <div
                  style={{
                    background: "url('/Books.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    width: 300,
                    opacity: 0.5,
                    position: "absolute",
                    borderRadius: 9999,
                  }}
                />
                <div style={{ position: "absolute", fontWeight: 700 }}>
                  Mental Health
                  <br />
                  Services
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                style={{
                  height: 300,
                  // width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  borderRadius: 100,
                }}
                className="text-center"
              >
                <div
                  style={{
                    background: "url('/Family.avif')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    width: "100%",
                    opacity: 0.5,
                    position: "absolute",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  Family & Social
                  <br /> Support
                </div>
              </div>
            </div>*/}
          </div>

          <div className="row" id="cards">
            <div className="col-3">
              <Link to="/services/mhs">
                <div className="card">
                  <img
                    src="Mhs.jpg"
                    className="card-img-top"
                    alt="Mental Health Services"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <button className="btn btn-secondary">
                        Mental Health Services
                      </button>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-3">
              <Link to="/services/family">
                <div className="card">
                  <img src="Family.avif" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      <button className="btn btn-primary">
                        Family & Social Support
                      </button>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-3">
              <Link to="/services/Education">
                <div className="card">
                  <img src="Books.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      <button className="btn btn-primary">Education</button>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-3">
              <div className="card">
                <img src="Work.avif" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link className="btn btn-primary" to="/services/employment">
                      Employment & Income
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
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
