import React from "react";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
      <div className={styles["drop-back"]} onClick={props.onConfirm} />
      <div className={styles["modal"]}>
        <div className={styles["error-title"]}>{props.title}</div>
        <div className={styles["error-content"]}>{props.message}</div>
        <div className={styles["add-user-action"]}>
          <Button onConfirm={props.onConfirm}>Ok</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
