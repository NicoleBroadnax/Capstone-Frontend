let APIUrl = "http://localhost:3001";

if (window.location.host.indexOf(".herokuapp.com") !== -1) {
  APIUrl = "https://nicolebroadnax-capstone-backend.herokuapp.com/";
}

export default APIUrl;
