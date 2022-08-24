import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIUrl from "../APIUrl";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (evt) => {
    evt.preventDefault();

    try {
      const response = await fetch(`${APIUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        //redirect to next screen here, login was succcessful
        navigate("/login?newUser=true");
      }
    } catch (error) {
      setError("Login API call failed. Check console for more details.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>register</h1>
      <form onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            id="username"
            onChange={(evt) => {
              setUsername(evt.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
