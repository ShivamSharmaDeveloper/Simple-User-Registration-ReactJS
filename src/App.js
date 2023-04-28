import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [userslist, setUserslist] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserslist((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userslist} />
    </div>
  );
}

export default App;
