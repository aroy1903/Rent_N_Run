import { useState } from "react";
import "../styles/login.css";
import signUserUp from "../firebase/firebaseActions";

export default function Register({ history }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState("");

  function userSignUp(e, pass, email, username) {
    e.preventDefault();
    if (pass !== "" && email !== "") {
      signUserUp(email, pass, username).then((val) => {
        const { result, error } = val;
        if (error) {
          setError(error);
        } else {
          history.push("/userpage");
        }
      });
    } else {
      return "Missing Information";
    }
  }

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>password</label>
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <label>username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button onClick={(e) => userSignUp(e, pass, email)}>submit</button>
      </form>
    </div>
  );
}
