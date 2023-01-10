import React from "react";
import UserForm from "./UserForm";
import "./NewUser.css";
function NewUser(props) {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = { ...enteredUserData, id: Math.random().toString() };
    props.onAddUser(userData);
  };

  // Render
  return (
    <div className="new-user">
      <UserForm onSaveUserData={saveUserDataHandler} />
    </div>
  );
}

export default NewUser;
