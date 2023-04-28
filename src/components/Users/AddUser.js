import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredusername, setEnteredusername] = useState("");
  const [enteredage, setEnteredage] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title: 'Invaild input',
        message: 'Please enter valid name and age (no empty values).'
      })
      return;
    }
    if (+enteredage < 1) {
      setError({
        title: "Invaild age",
        message: "Please Enter a valid age (>0).",
      });
      return;
    }
    // console.log(enteredusername, enteredage);
    props.onAddUser(enteredusername, enteredage);
    setEnteredusername("");
    setEnteredage("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredusername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredage(event.target.value);
  };

  const errorHandel = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandel}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={enteredusername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years):</label>
          <input
            id="age"
            type="number"
            value={enteredage}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
