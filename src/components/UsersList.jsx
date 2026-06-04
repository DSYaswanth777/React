import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setUsers(data))
    );
  }, []);
  return <>
  <ul>
    {users.map(user => <li key={user.id} className="fs-3"> {user.name} </li>)}
  </ul>
  <h2>Life cycle of react component</h2>
Mount - the component is created and inserted into the DOM for the first time. This where you fetch the intial data, start timers, set up sub
Update - something is changes state or props got an new value, React rerendders the component to reflect that change
Unmount - the component is removed from DOM. this is where you clean up - clear timers, cancels requests, remove event listeners





Update
Unmount



  </>;
}

export default UsersList;
