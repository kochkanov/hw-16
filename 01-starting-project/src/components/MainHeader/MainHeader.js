import React, {useContext} from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import AuthContext from './../store/auth-context';

const MainHeader = (props) => {

  const styled = useContext(AuthContext)
  return (
    <header style={{background:styled.isToggled ? 'rgb(0,36,34)': ''}} className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation  onLogout={props.onLogout} />
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
    </header>
  );
};

export default MainHeader;
