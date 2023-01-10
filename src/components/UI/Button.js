import React from "react";
import classes from "./ErrorModal.module.css";

function Button(props) {
  return (
    <button
      className={classes.button}
      onClick={props.onConfirm}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
