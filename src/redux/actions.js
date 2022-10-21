import { CHECK_TYPE } from "./types";

export default function checkFunction() {
  return {
    type: CHECK_TYPE,
    payload: "hello",
  };
}
