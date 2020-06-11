import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resourceProp }) => {
  return (
    <ul>
      {useResources(resourceProp).map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
