const Button = ({ setReqType, reqType, buttonText }) => {
  return (
    <button
      className={buttonText === reqType ? "selected" : null}
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
