import React, { useContext } from "react";
import classes from "./ToggleSwitch.module.css";
import AuthContext from './components/store/auth-context';


function ToggleSwitch() {
 const conText = useContext(AuthContext)
  return (
    <label className={classes.togswitch} >
      <input type="checkbox" checked={conText.isToggled} onChange={conText.onSwitch} />
      <span className={classes.switch} />
    </label>
  );
}
export default ToggleSwitch;