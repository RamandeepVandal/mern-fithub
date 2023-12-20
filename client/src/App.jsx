import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { WeightTracker } from "./pages/WeightTracker";
import { AddWeight } from "./pages/AddWeight";
import { CalorieCalculator } from "./pages/CalorieCalculator";

function App() {
  const [date, setDate] = useState(null);
  const [temp, setTemp] = useState("");

  const stringToDate = (str) => {
    const d = new Date(str).toISOString().split("T")[0];
    setDate(d);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WeightTracker />} />
        <Route exact path="/add" element={<AddWeight />} />
        <Route exact path="/bmr" element={<CalorieCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
