import { useReducer } from 'react';
const PLUS = 'PLUS';
const MINUS = 'MINUS';
const reducerCount = (prevState, action) => {
  if (action.type === PLUS) {
    return {
      ...prevState,
      number: prevState.number + 1
    };
  }
  if (action.type === MINUS) {
    return prevState - 1;
  }
  return prevState;
};
export const Counter = () => {
  const [counter, dispatchCount] = useReducer(reducerCount, {
    number: 0,
    name: ''
  });
  const plusHandler = () => {
    dispatchCount({ type: PLUS }); // { type: 'PLUS' } = action/действие
  };
  const minusHandler = () => {
    dispatchCount({ type: MINUS });
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </div>
  );
};
