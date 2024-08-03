import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Home />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
