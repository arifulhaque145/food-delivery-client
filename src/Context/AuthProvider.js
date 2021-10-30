import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const firebaseValues = useFirebase();
  return (
    <AuthContext.Provider value={firebaseValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
