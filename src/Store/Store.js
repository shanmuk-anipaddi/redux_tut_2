import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: true };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: true };
  }

  if (action.type === "increaseBy") {
    return { counter: state.counter + action.value, showCounter: true };
  }

  if (action.type === "toggleBy") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
