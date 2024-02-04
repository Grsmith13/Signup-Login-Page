/* 
  Component to allow new users to  create an account.
  DUE NOTE, this app currently does not create any accounts or stores any information. 
*/

import { useState, useEffect } from "react";
import Button from "./Button";

import "./Form.css";

const NewUserPage = ({ onCancel }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [welcomeMSG, setWelcomeMSG] = useState("");
  const [invalidMsg, setInvalidMSG] = useState("");

  const isMobile = () => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    return regexp.test(details);
  };

  useEffect(() => {
    if (isMobile()) {
      const inputElements = document.querySelectorAll("input");

      // Adjust the size attribute for input fields on mobile
      inputElements.forEach((input) => {
        input.setAttribute("size", "12");
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const specialCharRgx = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; //variable to store all the special characters to make the code a bit nicer.
    /*
      The if statement below is used to check that the users password follows the following requirements 
        1. Contains at least 9 characters.
        2. At least one uppercase character.
        3. at least one special character.

      If all of the requirements are met it will set a welcome message that will be displayed below the form. 
      Followed by clearing out the Username and password state as well as the input fields.
      Else , it will set the error message setting the error message to be displayed below the form.
      It will only clear out the password input as there is no requirements for the username at this time.
    */
    if (
      password.length > 8 &&
      /[A-Z]/.test(password) &&
      specialCharRgx.test(password)
    ) {
      setWelcomeMSG(`Welcome ${username}! Your account has been created.`);
      setInvalidMSG("");
      setUsername("");
      setPassword("");
    } else {
      setInvalidMSG(
        "Invalid Username, or Password. Password must be 9 or more characters and contain, an uppercase character, and a special symbol."
      );
      setWelcomeMSG("");
    }
  };

  // Logic for the cancel button to take the user back to the main page.
  const handleCancel = () => {
    setUsername("");
    setPassword("");
    onCancel();
  };

  return (
    <>
      <p className="top-text">Sign up by entering a username & password.</p>
      <section className="newUser-form">
        <form onSubmit={handleSubmit}>
          <div className="username-section">
            <label htmlFor="username">
              <strong>Username</strong>:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ background: "transparent" }}
              required
            />
          </div>
          <div className="password-section">
            <label htmlFor="password">
              <strong>Password</strong>:
            </label>
            <input
              title="Password must contain: at least 9 characters, a capital character , and a special character."
              className="password-field"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              style={{ background: "none" }}
              onChange={(e) => setPassword(e.target.value)}
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
            <Button>Create Account</Button>
            <Button type="button" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </section>
      {/* Both the welcome and invalid message are empty. On an unsuccessful/successful the appropriate state will be set to the message and be visible. */}
      <p>{welcomeMSG}</p>
      <p>{invalidMsg}</p>
    </>
  );
};

export default NewUserPage;
