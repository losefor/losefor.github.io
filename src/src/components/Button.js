import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Spinner from './Spinner'
export default function Button({
  onClick,
  label,
  type,
  color,
  backgroundColor,
  leftIcon,
  rightIcon,
  rounded,
}) {
  return (
    <button
      type={type}
      style={{color , backgroundColor}}
      className={`button  ${rounded && "button--rounded"} `}
      onClick={onClick}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {label && <span>{label}</span>}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
}
