import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/Store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter); //We will get updated counter value
  const show = useSelector((show) => show.showCounter);
  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const increaseBy = () => {
    //dispatch({ type: "increaseBy", value: 5 });
    dispatch(counterActions.increase(10));
  };

  const toggleby = () => {
    //dispatch({ type: "toggleBy", showCounter: false });
    dispatch(counterActions.toggle());
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
