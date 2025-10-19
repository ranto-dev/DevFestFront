import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero.jsx";
import Navbar from "../components/Navbar.jsx";

const ProducerSpace = () => {
  const [produits, setProduits] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/produits.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setProduits(response);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

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

  const [infoProducteur, setInfoProducteur] = useState({
    produit: "",
    quantite: 1,
    prix: 1,
    region: "",
  });

  return (
    <div>
      <Navbar />
      <Hero>
        <div className="flex justify-center items-center gap-4 p-4">
          <form
            className="border w-[50%] p-4 rounded-lg shadow-xl space-y-4"
            action=""
          >
            <div>
              <h1 className="text-2xl text-center">Nouveau Produit</h1>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="produit">Produit</label>
                <input
                  type="text"
                  id="produit"
                  value={infoProducteur.produit}
                  onChange={(e) => setInfoProducteur(e.target.value)}
                  className="w-full rounded-full p-2 focus:ring-blue-500 "
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantite">Quantité</label>
                <input
                  type="number"
                  id="quantite"
                  value={infoProducteur.quantite}
                  onChange={(e) => setInfoProducteur(e.target.value)}
                  className="w-full rounded-full p-2 focus:ring-blue-500 "
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="prix">Prix</label>
                <input
                  type="number"
                  id="prix"
                  value={infoProducteur.prix}
                  onChange={(e) => setInfoProducteur(e.target.value)}
                  className="w-full rounded-full p-2 focus:ring-blue-500 "
                />
              </div>
              <div>
                <label htmlFor="region">Votre région</label>
                <select
                  name="region"
                  id="region"
                  className="w-full rounded-full text-black p-2 focus:ring-blue-500 "
                  value={infoProducteur.region}
                  onChange={(e) => setInfoProducteur(e.target.value)}
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
                Ajouter Produit
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

export default ProducerSpace;
