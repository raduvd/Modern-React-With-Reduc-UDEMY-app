import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resourceProp) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources(resourceProp);
  }, [resourceProp]);

  const fetchResources = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  return resources;
};

export default useResources;
