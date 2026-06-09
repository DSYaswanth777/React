import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";
import { CiAirportSign1 } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

function UsersList() {
  const [users, setUsers] = useState([]);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setUsers(data))
    );
  }, []);



  
  return <>
  <ul className="d-flex flex-column">
  <CiAirportSign1 size={100} />

  {users.map(user => <Link to={`users/${user.id}`} key={user.id} className="fs-3"> <CiCircleCheck />
    {user.name} </Link>)}
  </ul>
  {/* <h2>Life cycle of react component</h2>
Mount - the component is created and inserted into the DOM for the first time. This where you fetch the intial data, start timers, set up sub
Update - something is changes state or props got an new value, React rerendders the component to reflect that change
Unmount - the component is removed from DOM. this is where you clean up - clear timers, cancels requests, remove event listeners





Update
Unmount */}


<p >Current Theme color {theme}</p>
  </>;
}

export default UsersList;
