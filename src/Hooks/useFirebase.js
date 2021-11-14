import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initApp from "../Firebase/initApp";
import useFetch from "./useFetch";

initApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  const history = useHistory();
  const { users } = useFetch();

  const auth = getAuth();
  const url = history?.location?.from || "/";

  const createAccount = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        upadateName(name);
        setUser(user);

        fetch("https://calm-shore-51674.herokuapp.com/users", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((datas) => {
            if (datas.insertedId) {
            }
          });
      })
      .catch((error) => {
        return;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteNewUser = () => {
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        alert("user deleted successfully");
      })
      .catch((error) => {
        alert("user not deleted");
      });
  };

  const upadateName = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);

        const log = users.find((item) => item?.email === result?.user?.email);
        if (!log) {
          const user = {name: result?.user?.displayName, email: result?.user?.email};
          fetch("https://calm-shore-51674.herokuapp.com/users", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          });
        }
        history.push(url);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    logIn,
    createAccount,
    isLoading,
    deleteNewUser,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
