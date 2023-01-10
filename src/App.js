import { useState } from "react";
import NewUser from "./components/Users/NewUser";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userData) => {
    setUsers([...users, userData]);
  };

  // Render
  return (
    <div>
      <NewUser onAddUser={addUserHandler} users={users} />
      <Users users={users} />
    </div>
  );
}

export default App;
