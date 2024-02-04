/*
    Button component with inline styling to simply files and make a reusable button format for the app.
*/

const Button = ({ onClick, children }) => {
  const buttonStyles = {
    background: "rgb(87,90,101)",
    background:
      "linear-gradient(97deg, rgba(87,90,101,1) 0%, rgba(39,41,47,1) 100%)",

    color: "white",
    padding: "16px",
    border: "1px solid black",
    borderRadius: "4px",
    boxShadow: "inset 0px 0px 3px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    width: "55%",
  };

  const mobileStyle = {};

  return (
    <button
      className="custom-button"
      style={buttonStyles} // c
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
