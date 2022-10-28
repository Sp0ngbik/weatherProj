import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncProcces,
  decrement,
  increment,
  incrementByAmount,
} from "../toolkitReducer/toolkitCounter";

const MainPage = () => {
  const [weather, setWeather] = useState();
  const weatherGet = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1b8c1b9c76eaf8cc7f9ddb85a5d5d7f4"
      )
      .then((response) => setWeather(response))
      .catch(() => {
        console.log("err");
      });
  };
  const counterValue = useSelector((state) => {
    return state.counter.value;
  });
  const [amountValue, setAmountValue] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <div>hello </div>
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
        placeholder="set your amount"
        onChange={(e) => {
          setAmountValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(amountValue)));
        }}
      >
        Increment by amount
      </button>
      <button
        onClick={() => {
          dispatch(asyncProcces(Number(amountValue)));
        }}
      >
        Async Process
      </button>
      <div>{counterValue}</div>
      <button
        onClick={() => {
          weatherGet();
        }}
      >
        get weather
      </button>
      <button
        onClick={() => {
          console.log(weather);
        }}
      >
        watch weather
      </button>
    </div>
  );
};

export default MainPage;
