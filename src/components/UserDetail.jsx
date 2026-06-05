import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

function UserDetail() {
  const { id } = useParams();

  const {
    data: user,
    loading,
    error,
  } = UseFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (loading) return <p>Loading please wait ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <p>Email :{user.email}</p>
        <p>Phone :{user.phone}</p>
      </div>
    </>
  );
}

export default UserDetail;
