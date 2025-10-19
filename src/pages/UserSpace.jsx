import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero.jsx";
import Navbar from "../components/Navbar.jsx";

const UserSpace = () => {
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

  const [resultat, setResultat] = useState(null)
  const [DashboardData, setDashBoardData] = useState(null)
  const [infoCurrent, setInfoCurrentUser] = useState(null)
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      fetch('http://' + window.location.hostname + ':8000/users/me', {
        'headers': {
          "Authorization": "Bearer " + window.localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }, [])

  const handleSumbit = (e) => {
    e.preventDefault()
    fetch('http://' + window.location.hostname + ':8000/predict', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer " + window.localStorage.getItem("token")
      },
      body: JSON.stringify({
        region: infoUser.region,
        budget: infoUser.budget
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setResultat(res)
        fetch('http://' + window.location.hostname + ':8000/users/me', {
          headers: {
            'Authorization': "Bearer " + window.localStorage.getItem("token")
          }
        }).then(res1 => res1.json())
          .then(res1 => {
            console.log("user", res1)
            setInfoCurrentUser(res1)
            fetch('http://' + window.location.hostname + ':8000/alimentUser', {
              method: 'POST',
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({
                "budget": infoUser.budget == 0 ? res1.budgetJournalier : infoUser.budget,
                "date": "string",
                "aliment": res,
                "user_id": res1.id
              })
            })
            .then(result=>result.json())
            .then(result=>{
              console.log(result)
              fetchDashBoardData()
            })
            .catch(erreur=>console.error(erreur))
          })

        
      })
      .catch(err => {
        console.error(err)
      })
  }

  const fetchDashBoardData = (e) => {
    fetch('http://' + window.location.hostname + ':8000/users/dashboard', {
      headers: {
        'Authorization': "Bearer " + window.localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.detail) {

        } else {

          setDashBoardData(res)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }


  useEffect(() => {
    fetchDashBoardData()
  }, [])
  return (
    <div>
      <Navbar />
      <Hero>
        <div className="flex justify-center items-center gap-4 p-4">
          <form
            className="border w-[50%] p-4 rounded-lg shadow-xl space-y-4"
            onSubmit={handleSumbit}
          >
            <div>
              <h1 className="text-4xl text-center">Nouveau info</h1>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="budget">Votre budget</label>
                <input
                  min={0}
                  type="number"
                  name="budget"
                  id="budget"
                  value={infoUser.budget}
                  onChange={(e) => setInfoUser({ ...infoUser, budget: e.target.value })}
                  className="w-full rounded-full p-2 focus:ring-blue-500 text-black"
                />
              </div>
              <div className="hidden">
                <label htmlFor="region">Votre région</label>
                <select
                  name="region"
                  id="region"
                  className="w-full rounded-full text-black p-2 focus:ring-blue-500 "
                  value={infoUser.region}
                  onChange={(e) => setInfoUser({ ...infoUser, region: e.target.value })}
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
            <div className="bg-green-500">Meilleur plat

              <div>
                {resultat != null && <>
                  <div>recette : {resultat.nom_recette}</div>
                  <div>region : {resultat.region}</div>
                  <div>cout : {resultat.cout} {resultat.monnaie}</div>
                  <div>Valeur nutritionnelle : {resultat.nutrition_index}</div>
                  {Object.keys(resultat.ingredients).map(k => <div>
                    {k} : {resultat.ingredients[k]}
                  </div>)}
                </>}
              </div>
            </div>
            <div className="bg-red-500">Dashboard

              <div>
                {DashboardData != null && <>
                  {DashboardData.aliments.map((aliment, idx) => <div>
                    <div>recette : {DashboardData.aliments[idx]['aliment']['nom_recette']}</div>

                    <div>region : {aliment.aliment.region}</div>
                    <div>cout : {aliment.aliment.cout} {aliment.monnaie}</div>
                    <div>Valeur nutritionnelle : {aliment.aliment.nutrition_index}</div>
                    {Object.keys(aliment.aliment.ingredients).map(k => <div>
                      {k} : {aliment.aliment.ingredients[k]}
                    </div>)}
                  </div>)}
                </>}
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default UserSpace;
