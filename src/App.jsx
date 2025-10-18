import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import UserSpace from "./pages/UserSpace.jsx";
import Producer from "./pages/Producer.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/espace-utilisateur" element={<UserSpace />} />
        <Route path="/espace-producteur" element={<Producer />} />
      </Routes>
    </Router>
  );
};

export default App;
