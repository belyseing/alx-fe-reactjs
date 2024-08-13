import { createContext } from "react";

// Create Context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

// Export Context and Provider
export { UserContext, UserProvider };
