import { useDispatch, useSelector } from "react-redux";
import checkFunction from "../redux/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const checkSelector = useSelector((state) => {
    return state.checkReducer;
  });
  return (
    <div>
      <div>hello</div>
      <button
        onClick={() => {
          dispatch(checkFunction());
        }}
      >
        redux
      </button>
      <div>{checkSelector}</div>
    </div>
  );
};

export default MainPage;
