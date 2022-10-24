import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../toolkitReducer/toolkitCounter";

const MainPage = () => {
  const counter = useSelector((state) => {
    return state.counter.value;
  });
  const [incrementAmount, setIncrementAmount] = useState("2");
  const dispatch = useDispatch();
  return (
    <div>
      <div>hello</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(incrementAmount)));
        }}
      >
        incrementByAmount
      </button>
      <button
        onClick={() => {
          dispatch(incrementAsync(Number(incrementAmount)));
        }}
      >
        async
      </button>
      <div>{counter}</div>
    </div>
  );
};

export default MainPage;
