import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Countries from "./pages/Countries";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="countries" />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
