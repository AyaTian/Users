import React from "react";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";

function UsersList(props) {
  return (
    <div className={styles["users-list"]}>
      {props.users.map((userData) => (
        <UserItem name={userData.name} age={userData.age} key={userData.id} />
      ))}
    </div>
  );
}

export default UsersList;
