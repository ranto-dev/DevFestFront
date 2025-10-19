import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { KitchenModel } from "../components/kitchen/kitchenModel.jsx";

const UserSpace = ({ isConnected, setIsConneted }) => {
  const regions = [
    "Analamanga",
    "Vakinankaratra",
    "Itasy",
    "Bongolava",
    "Diana",
    "Sava",
    "Boeny",
    "Sofia",
    "Betsiboka",
    "Alaotra-Mangoro",
    "Atsinanana",
    "Analanjirofo",
    "Amoron'i Mania",
    "Haute Matsiatra",
    "Vatovavy",
    "Fitovinany",
    "Atsimo-Atsinanana",
    "Ihorombe",
    "Menabe",
    "Atsimo-Andrefana",
    "Androy",
    "Anosy",
  ];

  const [infoUser, setInfoUser] = useState({
    budget: 0,
    region: "",
  });

  return (
    <div>
      <Navbar isConnected={isConnected} setIsConnected={setIsConneted} />
      <Hero>
        {/* <div className="w-full h-[100vh] absolute top-2" style={{ zIndex: -1 }}>
          <Canvas
            camera={{
              position: [0, 15, -15],
              fov: 50,
            }}
          >
            <Environment preset="sunset" />
            <ambientLight intensity={0.5} />
            <OrbitControls target={[3, 5, 0]} />
            <KitchenModel scale={30} />
          </Canvas>
        </div> */}
        <div className="flex justify-center items-center gap-4 p-4">
          <form className="bg-white w-[50%] p-4 mt-4 rounded-lg shadow-xl space-y-4">
            <div>
              <h1 className="text-4xl text-center">Nouveau info</h1>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="budget">Votre budget</label>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  value={infoUser.budget}
                  onChange={(e) => setInfoUser(e.target.value)}
                  className="w-full rounded-full p-2 focus:ring-blue-500 "
                />
              </div>
              <div>
                <label htmlFor="region">Votre région</label>
                <select
                  name="region"
                  id="region"
                  className="w-full rounded-full text-black p-2 focus:ring-blue-500 "
                  value={infoUser.region}
                  onChange={(e) => setInfoUser(e.target.value)}
                >
                  <option value="">-- Sélectionnez une région --</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <button type="submit" className="btn">
                Ajouter
              </button>
            </div>
          </form>
          <div className="w-full h-full space-y-4 ">
            <div className="bg-green-500">Reultat</div>
            <div className="bg-red-500">Dashboard</div>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default UserSpace;
