import React, { useState } from "react";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import ReviewMain from "./ReviewMain";
import InsideInfo from "./InsideInfo";
import PositionInfo from "./PositionInfo";

const App = () => {
  const [menuItem, setMenuItem] = useState("all");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="inside" element={<InsideInfo />} />
          <Route path="position" element={<PositionInfo />} />
          <Route path=":menu" element={<></>} />
        </Route>
        <Route path="/review/:index" element={<ReviewMain />} />
      </Routes>
    </div>
  );
};

export default App;
