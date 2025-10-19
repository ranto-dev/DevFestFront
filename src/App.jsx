import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import UserSpace from "./pages/UserSpace.jsx";
import ProducerSpace from "./pages/ProducerSpace.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/espace-utilisateur" element={<UserSpace />} />
        <Route path="/espace-producteur" element={<ProducerSpace />} />
      </Routes>
    </Router>
  );
};

export default App;
