import React from "react";
import useResources from "./useResources";

const UserList = ({ resourceProp }) => {
  return (
    <ul>
      {useResources("users").map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
