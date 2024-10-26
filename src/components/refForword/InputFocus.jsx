import React, { useRef, useEffect } from "react";


const InputFocus = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);


  useEffect(() => {
    const handleLoad = () => {
      if (usernameRef.current) {
        usernameRef.current.focus();
      }
    };
    window.addEventListener("load", handleLoad);
  }, []);

 

  return (
    <form className="profile-form" >
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input type="text" ref={usernameRef} id="username" placeholder="Enter your name" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" ref={passwordRef} id="password" placeholder="Enter your password" />
      </div>
      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default InputFocus;
