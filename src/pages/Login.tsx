import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../component/Alert";
import ReactDom from "react-dom";

const Login = () => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const reset = () => {
    setName("");
    setPassword("");
  };

  const test = () => {
    if (userName === "" || password === "") {
      alert("UserName and password cannot be empty");
      return;
    }
    if (userName === "admin" && password === "admin") {
      localStorage.setItem("userName", userName);
      localStorage.setItem("isAuth", "true");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <h1>Login</h1>

        <div>
          <label>UserName</label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={test}>
          Submit
        </button>

        <button type="submit" className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Login;
