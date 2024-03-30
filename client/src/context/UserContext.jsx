import { createContext, useReducer } from "react";

export const UserContext = createContext();

export const usersReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        users: action.payload,
      };
    case "CREATE_USER":
      return {
        users: [action.payload, ...state.users],
      };
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, {
    users: null,
  });

  return (
    <UserContext.Provider value={(state, dispatch)}>
      {children}
    </UserContext.Provider>
  );
};
