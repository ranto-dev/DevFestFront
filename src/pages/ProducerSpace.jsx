import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import { FaPen, FaSpinner, FaTrash } from "react-icons/fa6";
import EditProductForm from "../components/EditProductForm.jsx";
import Modal from "../components/layout/modal.jsx";

const ProducerSpace = () => {
  const [produits, setProduits] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState({ type: null, produit: null });

  const openModal = (type, produit) => {
    setModal({ type, produit });
  };

  const closeModal = () => {
    setModal({ type: null, produit: null });
  };

  const handleUpdateProduit = (id, updatedData) => {
    // code pour modification
    console.log("handleUpdate" + id, updatedData);
    fetch('http://' + window.location.hostname + ':8000/aliment/' + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "nom": updatedData.produit,
        "quantite": updatedData.quantite,
        "prix": updatedData.prix,
        "qualite": updatedData.qualite,
        "producteur_id": updatedData.producteur_id,
        "region": updatedData.region
      })
    })
      .then(res => {
        res.json()
      })
      .then(res => {
        console.log(res)
        if (window.localStorage.getItem('token')) {
          fetch('http://' + window.location.hostname + ':8000/producteur/me', {
            'headers': {
              "Authorization": "Bearer " + window.localStorage.getItem("token")
            }
          })
            .then(res => res.json())
            .then(res => {
              console.log(res)

              fetch("http://" + window.location.hostname + ":8000/aliment/producteur/" + res.id, {
                method: "GET",
              })
                .then((response) => response.json())
                .then((response) => {
                  console.log(response);
                  setProduits(response);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
                });
            })
            .catch(err => {
              console.error(err)
            })
        }
      })
    alert("Votre publication a été modifée avec success!");
  };

  const handleDeleteProduit = (id) => {
    alert("Delete produit id: " + id);
    fetch('http://' + window.location.hostname + ':8000/aliment/' + id, {
      method: "DELETE",
      
    })
      .then(res => {
        res.json()
      })
      .then(res => {
        console.log(res)
        if (window.localStorage.getItem('token')) {
          fetch('http://' + window.location.hostname + ':8000/producteur/me', {
            'headers': {
              "Authorization": "Bearer " + window.localStorage.getItem("token")
            }
          })
            .then(res => res.json())
            .then(res => {
              console.log(res)

              fetch("http://" + window.location.hostname + ":8000/aliment/producteur/" + res.id, {
                method: "GET",
              })
                .then((response) => response.json())
                .then((response) => {
                  console.log(response);
                  setProduits(response);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
                });
            })
            .catch(err => {
              console.error(err)
            })
        }
      })
    closeModal();
  };

  const renderModalContent = () => {
    const { type, produit } = modal;

    if (!type) return null;

    switch (type) {
      case "edit":
        return (
          produit && (
            <EditProductForm
              produit={produit}
              onClose={closeModal}
              onSave={handleUpdateProduit}
            />
          )
        );

      case "delete":
        return (
          produit && (
            <>
              <h2 className="text-xl font-bold text-red-600 mb-2">
                Supprimer le produit
              </h2>
              <p>
                Voulez-vous vraiment supprimer <strong>{produit.title}</strong> ?
              </p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleDeleteProduit(produit.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Supprimer
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Annuler
                </button>
              </div>
            </>
          )
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      fetch('http://' + window.location.hostname + ':8000/producteur/me', {
        'headers': {
          "Authorization": "Bearer " + window.localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res.detail){
            fetch("/data/produits.json", {
              method: "GET",
            })
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                setProduits(response);
                setTimeout(() => {
                  setIsLoading(false);
                }, 500);
              });
          }else{
            fetch("http://" + window.location.hostname + ":8000/aliment/producteur/" + res.id, {
              method: "GET",
            })
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                setProduits(response);
                setTimeout(() => {
                  setIsLoading(false);
                }, 2000);
              });
          }
          
        })
        .catch(err => {
          console.error(err)
        })
    } else {
      fetch("/data/produits.json", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setProduits(response);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        });
    }

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
    qualite: 0
  });

  if (isLoading === true) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <FaSpinner className="animate-spin" />
        </div>
      </div>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (window.localStorage.getItem('token')) {
      fetch('http://' + window.location.hostname + ':8000/producteur/me', {
        'headers': {
          "Authorization": "Bearer " + window.localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          console.log({
            nom: infoProducteur.produit,
            quantite: infoProducteur.quantite,
            qualite: infoProducteur.qualite,
            prix: infoProducteur.prix,
            region: infoProducteur.region,
            producteur_id: res.id
          })
          fetch('http://' + window.location.hostname + ':8000/aliment', {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              "nom": infoProducteur.produit,
              "quantite": infoProducteur.quantite,
              "prix": infoProducteur.prix,
              "qualite": infoProducteur.qualite,
              "producteur_id": res.id,
              "region": infoProducteur.region
            })


            // body: JSON.stringify({
            //   nom: infoProducteur.produit,
            //   quantite: infoProducteur.quantite,
            //   qualite: infoProducteur.qualite,
            //   prix: infoProducteur.prix,
            //   region: infoProducteur.region,
            //   producteur_id : res.id
            // })
          })
            .then(result => result.json())
            .then(result => {
              console.log(result)
              fetch("http://" + window.location.hostname + ":8000/aliment/producteur/" + res.id, {
                method: "GET",
              })
                .then((response) => response.json())
                .then((response) => {
                  console.log(response);
                  setProduits(response);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
                });
            })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  return (
    <div>
      <Navbar />
      <Hero>
        <div className="flex justify-start items-start gap-4 p-4">
          <form
            className="border w-[50%] p-4 rounded-lg shadow-xl space-y-4"
            onSubmit={handleSubmit}
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
                  onChange={(e) => setInfoProducteur({ ...infoProducteur, produit: e.target.value })}
                  className="w-full rounded-full p-2 focus:ring-blue-500  text-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantite">Quantité</label>
                <input
                  type="number"
                  id="quantite"
                  min={0}
                  value={infoProducteur.quantite}
                  onChange={(e) => setInfoProducteur({ ...infoProducteur, quantite: e.target.value })}
                  className="w-full rounded-full p-2 focus:ring-blue-500  text-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantite">Qualité</label>
                <input
                  type="number"
                  id="quantite"
                  min={0}
                  max={1}
                  step={0.1}
                  value={infoProducteur.qualite}
                  onChange={(e) => setInfoProducteur({ ...infoProducteur, qualite: e.target.value })}
                  className="w-full rounded-full p-2 focus:ring-blue-500 text-black "
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="prix">Prix</label>
                <input
                  type="number"
                  id="prix"
                  min={0}
                  value={infoProducteur.prix}
                  onChange={(e) => setInfoProducteur({ ...infoProducteur, prix: e.target.value })}
                  className="w-full rounded-full p-2 focus:ring-blue-500 text-black"
                />
              </div>
              <div>
                <label htmlFor="region">Votre région</label>
                <select
                  name="region"
                  id="region"
                  className="w-full rounded-full text-black p-2 focus:ring-blue-500 "
                  value={infoProducteur.region}
                  onChange={(e) => setInfoProducteur({ ...infoProducteur, region: e.target.value })}
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
            <div className="w-full grid grid-cols-4 gap-4">
              {produits.map((produit) => {
                return (
                  <div
                    key={produit.id}
                    className="border relative rounded-xl p-4"
                  >
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => openModal("edit", produit)}
                        className="text-blue"
                      >
                        <FaPen />
                      </button>
                      <button
                        onClick={() => openModal("delete", produit)}
                        className="text-red-500"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <div className="mt-4">
                      <h1 className="text-2xl">{produit.nom}</h1>
                    </div>
                    <div>
                      <p> Quantité: {produit.quantite} </p>
                      <p> Prix: {produit.prix} Ariary </p>
                      <p> Région: {produit.region} </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-red-500">Dashboard</div>
          </div>
        </div>
      </Hero>

      <Modal isOpen={modal.type !== null} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default ProducerSpace;
