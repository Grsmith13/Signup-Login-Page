import { useState } from "react";
import NewUserPage from "./Components/NewUserPage";
import LoginPage from "./Components/LoginPage";
import Button from "./Components/Button";
import "./App.css";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showNewUserPage, setShowNewUserPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  /*
    hides the other forms and makes the new user form visible. 
  */
  const showNewUser = () => {
    setShowWelcome(false);
    setShowNewUserPage(true);
    setShowLoginPage(false);
  };

  /*
    hides the other forms and makes the login form visible. 
  */
  const showLogin = () => {
    setShowWelcome(false);
    setShowNewUserPage(false);
    setShowLoginPage(true);
  };

  /*
    logic to be passed down to the components so that the cancel button will return them to the welcome card.
  */
  const cancelForm = () => {
    setShowWelcome(true);
    setShowNewUserPage(false);
    setShowLoginPage(false);
  };

  return (
    <div className="app-container">
      {showWelcome && (
        <div className="welcome-container" style={{ width: "15%" }}>
          <p className="top-text">Welcome to my webpage</p>
          {/*
            New user  opens the NewUserPage component for the user to create an account.
            Existing user opens the LoginPage component if the user already has an account.
           */}
          <div className="Button-container">
            <Button className="Button" onClick={showNewUser}>
              New User
            </Button>
            <Button className="Button" onClick={showLogin}>
              Existing User
            </Button>
          </div>
        </div>
      )}
      {showNewUserPage && (
        <div className="login-container newUser-container">
          <NewUserPage onCancel={cancelForm} />
        </div>
      )}
      {showLoginPage && (
        <div className="login-container">
          <LoginPage onCancel={cancelForm} />
        </div>
      )}
    </div>
  );
};

export default App;
