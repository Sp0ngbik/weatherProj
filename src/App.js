import { Route, Routes } from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import WelcomePage from "./welcome/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
