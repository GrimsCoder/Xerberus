import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Research from "./pages/Research";
import Token from "./pages/Token";
import Ispo from "./pages/Ispo";
import NotFound from "./pages/NotFound";
import Decentralization from "./pages/Decentralization";

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
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/scores" element={<Scores />} />
        {scores.map((route) => (
          <Route
            key={route.token}
            path={`/scores/${route.token}`}
            element={<Token token={route.token} />}
          />
        ))}
        <Route path="/research" element={<Research />} />
        <Route path="/ispo" element={<Ispo />} />
        <Route path="/decentralization" element={<Decentralization />} />
      </Routes>
    </>
  );
}

export default App;
