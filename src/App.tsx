import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./scss/app.scss";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Outlet/>
      </div>
    </>
  );
}

export default App;
