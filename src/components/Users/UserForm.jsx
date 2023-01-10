import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";

function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUserData = {
      name: name,
      age: age,
    };
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(not empty)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0)",
      });

      return;
    }
    props.onSaveUserData(enteredUserData);

    setAge("");
    setName("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={onSubmitHandler}>
        <div className={styles["new-use__controls"]}>
          <div className={styles["new-use__control"]}>
            <label>Username</label>
            <input
              type="text"
              min="1"
              step="1"
              onChange={nameChangeHandler}
              value={name}
            />
          </div>
          <div className={styles["new-use__control"]}>
            <label>Age(Years)</label>
            <input type="number" onChange={ageChangeHandler} value={age} />
          </div>
        </div>
        <div className={styles["new-use__actions"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </>
  );
}

export default UserForm;
