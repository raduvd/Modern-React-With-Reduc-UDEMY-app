export const PostReducer = (statePart = [], action) => {
  if (action.type === "FETCH_POST") {
    return (statePart = action.payload);
  } else {
    return statePart;
  }
};
