"use client"

import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setToken(token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Google Sign-In Example</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      {user ? (
        <div>
          <p>User Display Name: {user.displayName}</p>
          <p>User Email: {user.email}</p>
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
}
