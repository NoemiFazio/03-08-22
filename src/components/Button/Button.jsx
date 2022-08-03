import "./index.css";

const Button = ({ onClick, children }) => {
  return (
    <div className="Button">
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
