import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "./../store/auth-context";

// const emailReducer = (prevState, action) => {
//   if (action.type === "USER_INPUT") {
//     return {
//       value: action.emailValue,
//       isValid: action.emailValue.includes("@"),
//     };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return {
//       value: prevState.value,
//       isValid: prevState.value.includes("@"),
//     };
//   }
//   return {
//     value: "",
//     isValid: false,
//   };
// };

// const passwordReducer = (prevState, action) => {
//   if (action.type === "USER_PASSWORD" ) {
//     return {
//       value: action.passwordValue,
//       isValid: action.passwordValue.trim().length > 6,
//     };
//   }
//   if (action.type === "BLUR_PASSWORD") {
//     return {
//       value: prevState.value,
//       isValid: prevState.value.trim().length > 6,
//     };
//   }
//   return {
//     value: "",
//     isValid: false,
//   };
// };

const infoLoginReduser = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      ...prevState,
      valueOfEmail: action.emailValue,
      isEmailValid: action.emailValue.includes("@"),
    };
  }
  if (action.type === "USER_PASSWORD") {
    return {
      ...prevState,
      valueOfPassword: action.passwordValue,
      isPasswordValid: action.passwordValue.trim().length > 6,
    };
  }

  if (action.type === "BLUR_PASSWORD") {
    return {
      ...prevState,
      valueOfPassword: prevState.valueOfPassword,
      isPasswordValid: prevState.valueOfPassword,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...prevState,
      valueOfEmail: prevState.valueOfEmail,
      isEmailValid: prevState.valueOfEmail.includes("@"),
    };
  }
  return prevState;
};

const Login = (props) => {
  // const [emailState, dispatchEmail] = useReducer(emailReducer, {
  //   isValid: undefined,
  //   value: "",
  // });

  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   isValid: undefined,
  //   value: "",
  // });

  const [infoLogin, dispatchInfoLogin] = useReducer(infoLoginReduser, {
    isPasswordValid: undefined,
    isEmailValid: undefined,
    valueOfEmail: "",
    valueOfPassword: "",
  });

  // const [enteredEmail, setEnteredEmail] = useState('text'); // write some email
  // const [emailIsValid, setEmailIsValid] = useState(); // check is email valid or not
  // const [enteredPassword, setEnteredPassword] = useState(""); // write some password
  // const [passwordIsValid, setPasswordIsValid] = useState(); // check is password valid or not
  const [formIsValid, setFormIsValid] = useState(false); // email and password are valid
  useEffect(() => {
    console.log(infoLogin);
    const timer = setTimeout(() => {
      const isValid =
        infoLogin.valueOfEmail.includes("@") &&
        infoLogin.valueOfPassword.trim().length > 6;
      setFormIsValid(isValid);
    }, 1000);

    // clean up function
    return () => clearTimeout(timer);

    // }, [emailState.value, passwordState.value]);
  }, [infoLogin.valueOfEmail, infoLogin.valueOfPassword]);
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    // dispatchEmail({ type: "USER_INPUT", emailValue: event.target.value });
    dispatchInfoLogin({ type: "USER_INPUT", emailValue: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);//////////////////
    dispatchInfoLogin({
      type: "USER_PASSWORD",
      passwordValue: event.target.value,
    });
  };
  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchInfoLogin({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);///////
    dispatchInfoLogin({ type: "BLUR_PASSWORD" });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(emailState, passwordState);
    props.onLogin(infoLogin);
  };
  const formColor = useContext(AuthContext);
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            infoLogin.isEmailValid === false ? classes.invalid : ""
          }`}
        >
          <label
            style={{ color: formColor.isToggled ? "white" : "" }}
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            value={infoLogin.valueOfEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            infoLogin.isPasswordValid === false ? classes.invalid : ""
          }`}
        >
          <label
            style={{ color: formColor.isToggled ? "white" : "" }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={infoLogin.valueOfPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;
