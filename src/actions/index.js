import jsonPlaceholder from "./../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPost = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POST",
      payload: response.data,
    });
  };
};

export const fetchUser = (userId) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    //trebuie await din cauza ca dupa acest dispatch mai urmeaza un alt dispatch
    await dispatch(fetchPost());
    const listUserId = _.uniq(_.map(getState().posts, "userId"));
    listUserId.forEach((id) => dispatch(fetchUser(id)));
  };
};
