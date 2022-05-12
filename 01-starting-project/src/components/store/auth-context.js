import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout:()=>{},
  onSwitch:()=>{},
  isToggled: false
});
export default AuthContext;
