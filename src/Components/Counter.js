import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter); //We will get updated counter value
  const show = useSelector((show) => show.showCounter);
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseBy = () => {
    dispatch({ type: "increaseBy", value: 5 });
  };

  const toggleby = () => {
    dispatch({ type: "toggleBy", showCounter: false });
  };

  return (
    <main>
      <div>-------Counter Value--------</div>
      {show && <div>Counter : {counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseBy}>Increase by 5</button>
      <button onClick={toggleby}>Toggle</button>
    </main>
  );
};

export default Counter;
