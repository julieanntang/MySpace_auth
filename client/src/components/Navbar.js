import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = (props) => {
  const { user, handleLogout } = useContext(AuthContext);
  const { location } = props;

  const rightNavItems = () => {
    if (user) {
      return <Menu.Item onClick={() => handleLogout()}>Logout</Menu.Item>
    }
    return (
      <>
        <Link to="/login">
          <Menu.Item active={location.pathname === "/login"}>Login</Menu.Item>
        </Link>
        <Link to="/register">
          <Menu.Item active={location.pathname === "/register"}>Register</Menu.Item>
        </Link>
      </>
    );
  };


  return (
    <Menu>
      <Menu.Menu position ="right">{rightNavItems()}</Menu.Menu>
    </Menu>
  );
};


export default withRouter(Navbar);
