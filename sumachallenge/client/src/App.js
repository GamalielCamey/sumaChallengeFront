import {Route, Routes} from "react-router-dom";
import Home from "./Components/home.js";
import Detail from "./Components/detail.js";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
