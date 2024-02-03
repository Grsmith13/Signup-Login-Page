/*
  Component to allow existing users to login to their account.
  DUE NOTE, at this time there is no proper authentication or any account creation/logging at this time.
*/

import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import "./Form.css";

const testAccount = { username: "renaku", password: "Lumbridge!" }; // preset login info to test the login logic of the app
const LoginPage = ({ onCancel }) => {
  const userRef = useRef(); //allows to set the focus on the username

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (success) {
      timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPass("");
    if (user === testAccount.username && pass === testAccount.password) {
      setSuccess(true);
      setUser("");
      setErrMsg("");
    } else {
      setErrMsg("Invalid username or password.");
    }
  };

  const successModal = () => {
    return (
      <div
        role="alertdialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        tabIndex={0}
        className="modal"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          zIndex: "999",
        }}
      >
        <div className="modal-content">
          <h2 id="modal-title">You are now logged in!</h2>
          <p id="modal-description">You have successfully logged in.</p>
        </div>
      </div>
    );
  };

  // logic for the cancel button to take the user back to the main page as well as clearing the username and password.
  const handleCancel = () => {
    setUser("");
    setPass("");
    onCancel();
  };

  return (
    <>
      <p className="top-text">Sign in by entering your username & password.</p>
      <section className="existing-user-form">
        <form onSubmit={handleSubmit}>
          <div className="username-section">
            <label htmlFor="username">
              <strong>Username</strong>:
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
          <div className="password-section">
            <label htmlFor="password">
              <strong>Password</strong>:
            </label>
            <input
              className="password-field"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show_button"
              style={{ background: "darkgrey" }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="account-buttons">
            <Button>Login</Button>
            <Button type="button" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </section>
      {success && successModal()}
      <p>{errMsg}</p>
    </>
  );
};

export default LoginPage;
