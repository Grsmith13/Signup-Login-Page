import { useState, useRef, useEffect } from "react";

const testAccount = { username: "renaku", password: "varrock" };

const LoginPage = () => {
  const userRef = useRef();
  const errRef = useRef();
  /*
    UseState hooks for the users , username and password
    errmsg is for unsuc
 */
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(() => {}, 3000);
      setSuccess(false);
      return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount or modal closure
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPass("");
    if (user == testAccount.username && pass == testAccount.password) {
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

  return (
    <>
      {success && successModal()}
      <section className="login_form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          ></input>
          <button>Submit</button>
        </form>
      </section>
      <p> {errMsg} </p>
    </>
  );
};

export default LoginPage;
