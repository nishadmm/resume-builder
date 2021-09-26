import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "resume-builder-52523",
  storageBucket: "resume-builder-52523.appspot.com",
  messagingSenderId: "99333668087",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-XBFKZP0D5J",
};

// Store user in fireStore
export const getUserDataFromDB = async (userData) => {
  if (!userData) return;
  const userRef = firestore.doc(`user/${userData.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userData;
    const createdAt = new Date();
    await userRef.set({
      displayName,
      email,
      photoURL,
      createdAt,
    });
  }
  return userRef;
};

// Store user Resume in fireStore
export const getUserResumeFromDB = async (formData, userID) => {
  if (!userID) return;
  const userRef = firestore.doc(`resumeData/${userID}`);

  if (formData) {
    await userRef.set({
      ...formData,
    });
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
