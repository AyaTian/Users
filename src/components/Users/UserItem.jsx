import React from "react";
import styles from "./UserItem.module.css";
function UserItem(props) {
  const { name, age } = props;
  return (
    <div className={styles["user-item"]}>
      <div>
        {name}({age} years old)
      </div>
    </div>
  );
}

export default UserItem;
