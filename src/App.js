import "./App.css";
//import ReactDOM from 'react-dom'; do i need this ?
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Having routes allowes us to click the link and move to the path click on
import Login from "./Components/Login/Login";
import Homepage from "./Components/Homepage/Homepage";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Admin from "./Admin";
import Mhs from "./Components/Mhs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/Mhs" element={<Mhs />} />
            <Route path="about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Route path="/services" element={<Services />} />

//<Route path="/" element={<Headers />}></Route>

// router dom will link to diffrent componets
