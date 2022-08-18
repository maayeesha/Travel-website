import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA9QDIz-lbU6ijaPgDGtNZzcWmXIJsvDls",
  authDomain: "travel-website-7953b.firebaseapp.com",
  projectId: "travel-website-7953b",
  storageBucket: "travel-website-7953b.appspot.com",
  messagingSenderId: "896686864767",
  appId: "1:896686864767:web:02920c896b11ca9abdc24a",
});

export const auth = app.auth();
export default app;
