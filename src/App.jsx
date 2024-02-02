import { useState } from "react";
import NewUserPage from "./Components/NewUserPage";
import LoginPage from "./Components/LoginPage";
import "./App.css";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showNewUserPage, setShowNewUserPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  const showNewUser = () => {
    setShowWelcome(false);
    setShowNewUserPage(true);
    setShowLoginPage(false);
  };

  const showLogin = () => {
    setShowWelcome(false);
    setShowNewUserPage(false);
    setShowLoginPage(true);
  };

  const cancelForm = () => {
    setShowWelcome(true);
    setShowNewUserPage(false);
    setShowLoginPage(false);
  };

  return (
    <div className="app-container">
      {showWelcome && (
        <div className="welcome-container">
          <div className="welcome-text">
            <p className="welcome_">Welcome to my webpage</p>
          </div>
          <div className="button-container">
            <button className="button" onClick={showNewUser}>
              New User
            </button>
            <button className="button" onClick={showLogin}>
              Existing User
            </button>
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
