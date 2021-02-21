import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function TextInput({
  icon,
  label ,
  placeholder,
  width = "300px",
  bgColor,
  onChange,
  onEnter,
  error,
  touched,
  value,
  type,
}) {
  const inputHandler = (e) => {
    if (onChange) return onChange(e.target.value);
  };

  const onEnterClicked = (e) => {
    // console.log()
    if (e.which == 13) onEnter(e.target.value);
  };
  return (
    <div className="input-cont" style={{ width }}>
      <div style={{ width }} className="input__label">
        {label}
      </div>
      <div style={{ width }} className="input">
        {icon && <FontAwesomeIcon className="input__icon" icon={icon} />}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          style={{
            padding: icon ? "" : "0px 10px",
            borderColor: error && touched && "tomato",
            backgroundColor:bgColor 
          }}
          onKeyPress={onEnterClicked}
          onChange={inputHandler}
        />
      </div>
    </div>
  );
}
