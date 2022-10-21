import { CHECK_TYPE } from "../types";

const initialState = [];
const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_TYPE:
      return action.payload;
    default:
      return state;
  }
};
export default checkReducer;
