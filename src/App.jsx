import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import UserSpace from "./pages/UserSpace.jsx";
import ProducerSpace from "./pages/ProducerSpace.jsx";
import { useState } from "react";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing isConnected={isConnected} setIsConnected={setIsConnected} />} />
        <Route path="/espace-utilisateur" element={<UserSpace isConnected={isConnected} setIsConnected={setIsConnected} />} />
        <Route path="/espace-producteur" element={<ProducerSpace isConnected={isConnected} setIsConnected={setIsConnected} />} />
      </Routes>
    </Router>
  );
};

export default App;
