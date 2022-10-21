import { Link } from "react-router-dom";
import style from "./style.module.scss";
const WelcomePage = () => {
  return (
    <div className={style.greetingsBlock}>
      <h1>Hello, this is my site with weather info</h1>
      <Link to="/main">Try this</Link>
    </div>
  );
};

export default WelcomePage;
