import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Research from "./pages/Research";
import Token from "./pages/Token";
import Ispo from "./pages/Ispo";
import NotFound from "./pages/NotFound";
import Decentralization from "./pages/Decentralization";
import Signup from "./components/Signup";
import Log from "./pages/Log";
import Maintenance from "./pages/Maintenance";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [scores, setScores] = useState([]);

  const url = "https://backend.xerberus.io/api/v1/data/";

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await axios.get(`${url}score?label=RiskScore`);
      setScores(response.data.scores);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Maintenance />} /> */}
        <Route path="/scores" element={<Scores />} />
        {/* <Route path="/scores" element={<Maintenance />} /> */}
        {scores.map((route) => (
          <Route
            key={route.token}
            path={`/scores/${route.token}`}
            element={<Token token={route.token} />}
          />
        ))}
        <Route path="/research" element={<Research />} />
        {/* <Route path="/research" element={<Maintenance />} /> */}
        <Route path="/ispo" element={<Ispo />} />
        <Route path="/decentralization" element={<Decentralization />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/log" element={<Log />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
