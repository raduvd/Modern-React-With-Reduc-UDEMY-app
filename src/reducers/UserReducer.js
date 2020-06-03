export const UserReducer = (statePart = [], action) => {
  if (action.type === "FETCH_USER") {
    return [...statePart, action.payload];
  } else {
    return statePart;
  }
};
