import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";
import View from "./View";
export default function Avatar({ icon, radius, image, letter }) {
  return (
    <div
      className="avatar"
      style={{ width: `${radius}rem`, height: `${radius}rem` }}
    >
      {icon && (
        <FontAwesomeIcon style={{ fontSize: `${radius / 2}rem` }} icon={icon} />
      )}

      {letter && <h2 className="avatar__letter">{letter.slice(0, 1)}</h2>}
      {image && <img className="avatar__img" src={image} />}
    </div>
  );
}
