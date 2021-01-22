import React from "react";

import { googleSignIn } from "../Firebase";


const SignIn = () => {
  const signInWithGoogle = () => {
    googleSignIn();
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      
    </div>
  );
};



export default SignIn;
