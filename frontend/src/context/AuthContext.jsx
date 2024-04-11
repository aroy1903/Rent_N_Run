import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { onAuthStateChanged, getAuth } from "firebase/auth";

import { firebaseApp } from "../firebase/firebaseConfig";

const auth = getAuth(firebaseApp);

export const AuthContext = createContext({ user: null });

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
