import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  
  const handleRegister = async (user) => {
    console.log("register user", user);
    try {
      let res = await axios.post("/api/auth", user);
      setUser(res.data.data)
    } catch (err) {
      alert("unsuccessful register. check console")
      console.log("error")
      console.log(err.response);
    }
  };

  const handleLogin = async (user) => {
    console.log("login user", user);
    try {
      let res = await axios.post("/api/auth/sign_in", user);
      console.log(res);
      setUser(res.data.data);
    } catch (err) {
      alert("error");
      console.log(err);
      console.log(err.response);
    }
  };

  const handleLogout = () => {
    console.log("logout user")
    setUser(null);
    localStorage.removeItem("access-token");
  };

  return (
    <AuthContext.Provider 
      value={{
        user, 
        handleRegister, 
        handleLogin, 
        handleLogout, 
        setUser, 
        authenticated: user ? true: false
      }}
      >
      {props.children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;