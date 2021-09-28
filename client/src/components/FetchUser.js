import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";


// checking if token is valid or not...

const FetchUser = (props) => {

  let {user, setUser} = useContext(AuthContext)

  let [checked, setChecked] = useState(false)
  useEffect(() => {
    CheckUser();
  }, []);

  const CheckUser = async () => {
    if (user || !localStorage.getItem("access-token")) {
      setChecked(true)
      return;
    }

    try {
      const res =  await axios.get("/api/auth/validate_token")
      setUser(res.data.data)
    } catch (err) {
      
    } finally {
      setChecked(true);
    }

  };

  return checked ? props.children : null;


};

export default FetchUser;