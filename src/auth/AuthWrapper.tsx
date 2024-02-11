import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export default function AuthWrapper({ children }: { children: ReactNode }) {


  const [isAuth, setAuth] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log(user)
      if (user) {
        console.log("PRESENT")
        setAuth(true)
      } else {
        console.log("NOT PRESENT")
        setAuth(false)
      }
    });

    return unsubscribe;
  }, [])

  return isAuth ? children : <Navigate to={'/login'} />

}
