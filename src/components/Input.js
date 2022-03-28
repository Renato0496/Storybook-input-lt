import PropTypes from "prop-types";
import {useState} from "react";

function Input({
  type = "text",
  placeholder= "write here",
  backgroundColor = "white",
  alert = false,
  required = true,
  size = "sm",
  flexDirection = "column",
}) {

  const [inputValue, setInputValue] = useState('');

  let scale = 1.25;
  if (size === "sm") scale = 1;
  if (size === "lg") scale = 1.5;

  let alertBack = "";
  if (alert) alertBack = "#fca5a5";

  let labelText = "Username";
  if (type === "email") {
    labelText = "E-mail";
    placeholder = "example@mail.com"
  }

  if (type === "password") {
    labelText = "Password";
    placeholder = "*******"
  }

  if (required) labelText += " *";

  const containerStyle = {
    backgroundColor,
    display: "flex",
    flexDirection,
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid",
    borderRadius: "5px",
    maxWidth: `${(flexDirection === "row") ? scale * 270 : scale * 200}px`,
    padding: `${scale * 5}px`,
    gap: "5px",
  };

  const inputStyle = {
    backgroundColor: `${alertBack}`,
    margin: "5px",
    border: "1px solid",
    width: `${scale*150}px`,
    height: `${scale*45}px`,
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h3>{labelText}</h3>
      <input style={inputStyle} placeholder={placeholder} value={inputValue} type={type} onChange={(event) => setInputValue(event.target.value)}/>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  alert: PropTypes.bool,
  required: PropTypes.bool,
  flexDirection: PropTypes.oneOf(["row", "column"]),
};

export default Input;
