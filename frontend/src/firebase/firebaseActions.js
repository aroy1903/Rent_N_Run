"use client";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {firebaseApp} from "./firebaseConfig";

export const auth = getAuth(firebaseApp);

export default async function signUserUp(
  email,
  password,
  username
) {
  let result = null;
  let error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    if (result) {
      updateProfile(auth.currentUser, { displayName: username });
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}

const signUserIn = async (email, password) => {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

const signUserOut = async () => {
  let result = null;
  let error = null;

  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export { signUserIn, signUserOut };
