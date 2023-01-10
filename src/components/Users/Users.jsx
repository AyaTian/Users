import React from "react";
import styles from "./Users.module.css";
import Card from "../UI/Card";
import UsersList from "./UsersList";

function Users(props) {
  return (
    <Card className={styles["users"]}>
      <UsersList users={props.users} />
    </Card>
  );
}

export default Users;
