import { useState, useRef, useEffect } from "react";

const NewUserPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [welcomeMSG, setWelcomeMSG] = useState("");
  const [invalidMsg, setInvalidMSG] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const specialCharRgx = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

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
      console.log("invalid password");
      setInvalidMSG(
        "Password must be 9 or more characters and contain, an uppercase character, and a special symbol."
      );
      setWelcomeMSG("");
    }
  };

  return (
    <section className="newUser_form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Create Account</button>
      </form>
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}{" "}
      </button>
      <p>{welcomeMSG}</p>
      <p>{invalidMsg}</p>
    </section>
  );
};

export default NewUserPage;
