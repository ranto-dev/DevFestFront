import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import UserSpace from "./pages/UserSpace.jsx";
import ProducerSpace from "./pages/ProducerSpace.jsx";
import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading === true) {
    return (
      <>
      <div>
        load
      </div>
        <Loader />
      </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              isConnected={isConnected}
              setIsConnected={setIsConnected}
            />
          }
        />
        <Route
          path="/espace-utilisateur"
          element={
            <UserSpace
              isConnected={isConnected}
              setIsConnected={setIsConnected}
            />
          }
        />
        <Route
          path="/espace-producteur"
          element={
            <ProducerSpace
              isConnected={isConnected}
              setIsConnected={setIsConnected}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
