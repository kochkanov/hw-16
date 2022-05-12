import React, {useContext} from 'react';


import classes from './Card.module.css';
import AuthContext from '../../store/auth-context';

const Card = (props) => {
  const conTextData = useContext(AuthContext)
  return (
 
  <div style={{background: conTextData.isToggled ? '#6a7a7c': ''}} className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
