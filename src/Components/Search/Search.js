import "./Search.scss";
import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="container" id="searchContainer">
      <section className="search-sec">
        <div className="container">
          <form action="#" method="post" noValidate="noValidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      className="form-control search-slt"
                      placeholder="What are you looking for? "
                      value={searchInput}
                      onChange={(evt) => {
                        setSearchInput(evt.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      className="form-control search-slt"
                      placeholder="Enter your location"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      className="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option>Categories</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button type="button" className="btn wrn-btn">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Search;
