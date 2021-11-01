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

initApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const auth = getAuth();
  const url = "/home";

  const createAccount = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        upadateName(name);
        setUser(user);

        fetch("http://localhost:5000/users", {
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
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logIn = (email, password) => {
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
        history.push(url);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
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
