const INITIAL_STATE = {
  users: [],
  services: [],
};

const UserReducer = (state = INITIAL_STATE, action) => {
  console.log("Reducer", state, action);
  switch (action.type) {
    case "USER_ACTION":
      return {
        ...state,
        users: [...action.payload],
      };
    case "SERVICE_ACTION":
      return {
        ...state,
        services: [...action.payload],
      };
    default:
      return state;
  }
};

export default UserReducer;
