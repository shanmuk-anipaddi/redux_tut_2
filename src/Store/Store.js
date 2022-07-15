import { createSlice, configureStore } from "@reduxjs/toolkit";
//import { createStore } from "redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: true };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: true };
//   }

//   if (action.type === "increaseBy") {
//     return { counter: state.counter + action.value, showCounter: true };
//   }

//   if (action.type === "toggleBy") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }

//   return state;
// };

//const store = createStore(counterReducer);
const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
