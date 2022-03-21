import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Countries from "./pages/countries/Countries";
import Headlines from "./pages/headlines/Headlines";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="countries" />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/headlines" element={<Headlines />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
