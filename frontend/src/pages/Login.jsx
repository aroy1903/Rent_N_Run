import { useState } from "react";
import "../styles/login.css";
import { signUserIn } from "../firebase/firebaseActions";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function loginUser(e, pass, email) {
    e.preventDefault();
    if (pass !== "" && email !== "") {
      signUserIn(email, pass).then((val) => {
        const { result, error } = val;
        if (error) {
          setError(error);
        } else {
          history.push("/userpage");
        }
      });
    } else {
      return "Please enter your email and password";
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
        <button onClick={(e) => loginUser(e, pass, email)}>submit</button>
      </form>
    </div>
  );
}
