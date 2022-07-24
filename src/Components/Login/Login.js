import React, { useState,useEffect } from 'react';
import fire from '../../Firebase';
import SignIn from '../SignIn/SignIn';

//https://thumbs.dreamstime.com/b/sunset-tropical-beach-palm-trees-sea-summer-resort-background-vector-illustration-sunset-tropical-beach-palm-217475782.jpg
const Login = () => {
  const [user,setUser] = useState('');
  const[email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = ('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }
  const clearErrors = () =>
  {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () =>
  {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
      }
    });
  };

  const handleSignUp = () =>
  {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
      }
    });

  };
  const handleLogOut = () =>
  {
    fire.auth().signOut();
  };

  const authListener = () =>
  {
    fire.auth().onAuthStateChanged(user =>{
      if(user) {
        clearInputs();
        setUser(user);
      }
      else {
        setUser('');
      }
    });
  };

  useEffect(() =>{
      authListener();
  },[])
  return (
    <div>
      <SignIn email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} 
      handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError = {emailError}
      passwordError={passwordError}></SignIn>
    </div>
  );
};

export default Login;