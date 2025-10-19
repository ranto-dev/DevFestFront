import { useEffect, useState } from "react";
import { navLists } from "../constants";
import LoginForm from "./authentification/loginForm.jsx";
import SigninForm from "./authentification/signinForm.jsx";
import Modal from "./layout/modal.jsx";
import LoginFormProducteur from "./authentification/loginFormProducteur.jsx";
import SigninFormProducteur from "./authentification/signinFormProducteur.jsx";
import { useNavigate } from "react-router-dom";


function useLocalStorage(key, defaultValue) {
  // 1. Initialiser l'�tat en lisant depuis localStorage
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // Tenter de lire la valeur depuis localStorage
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // 2. Synchroniser l'�tat avec localStorage chaque fois que la valeur change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}



const Navbar = ({ isConnected, setIsConnected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({ type: null });
  const [typeUser, setTypeUser] = useState("user");
  const [connected, setConnected] = useLocalStorage("connected", false)
  const handleTypeUser = () => {
    if (typeUser == "user") {
      setTypeUser("producteur");
    } else {
      setTypeUser("user");
    }
  };
  const LogOut = (e) => {
    alert("handleLogout");
  };

  const openModal = (type) => {
    setModal({ type });
  };

  const closeModal = () => {
    setModal({ type: null });
  };

  const navigate = useNavigate()

  const handleLogin = (loginInfo) => {
    let form_data = new FormData();
    form_data.set("username", loginInfo.username);
    form_data.set("password", loginInfo.password);

    fetch("http://" + window.location.hostname + ":8000/users/token", {
      method: "POST",
      body: form_data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.access_token) {
          window.localStorage.setItem("token", res.access_token);
          // setIsConnected(true);
          // window.localStorage.setItem("connected", true)
          setConnected(true)
          alert("Connectez avec succès . . . ");
          navigate("/espace-utilisateur")
        } else {
          alert(
            "Erreur lors de la connexion, vérifiez votre nom d'utilisateur et votre mot de passe . . . "
          );
        }
      })
      .catch((err) => console.error(err));
  };
  const handleLoginProducteur = (loginInfo) => {
    // alert("handleLogin");
    // alert(loginInfo.username)
    let form_data = new FormData();
    form_data.set("username", loginInfo.username);
    form_data.set("password", loginInfo.password);

    fetch("http://" + window.location.hostname + ":8000/producteur/token", {
      method: "POST",
      body: form_data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.access_token) {
          window.localStorage.setItem("token", res.access_token);
          // setIsConnected(true);
          setConnected(true)
          alert("Connectez avec succès . . . ");
          navigate("/espace-producteur")
        } else {
          alert(
            "Erreur lors de la connexion, vérifiez votre nom d'utilisateur et votre mot de passe . . . "
          );
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSignin = (signInfo) => {
    // alert("handleSignin");

    console.log(signInfo);
    fetch("http://" + window.location.hostname + ":8000/users/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: signInfo.username,
        full_name: signInfo.full_name,
        email: signInfo.email,
        password: signInfo.password,
        region: signInfo.region,
        budgetJournalier: signInfo.budget_journalier,
        adresse: signInfo.addresse,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Incription Terminé");
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur lors de l'inscription");
      });
  };
  const handleSigninProducteur = (signInfo) => {
    // alert("handleSignin");

    console.log(signInfo);
    fetch("http://" + window.location.hostname + ":8000/producteur/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: signInfo.username,
        full_name: signInfo.full_name,
        email: signInfo.email,
        password: signInfo.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.detail) {
          alert("Erreur lors de l'inscription");
        } else {
          alert("Incription Terminé");
        }
      })

      .catch((err) => {
        console.error(err);
        alert("Erreur lors de l'inscription");
      });
  };

  const logOut = () => {
    // setIsConnected(false);
    setConnected(false)
    // window.localStorage.setItem('connected', false) 
    window.localStorage.removeItem("token");
  };
  const renderModalContentAuth = () => {
    const { type } = modal;

    if (!type) return null;

    switch (type) {
      case "login":
        return (
          <>
            <button className="btn" onClick={handleTypeUser}>
              {typeUser}
            </button>
            {typeUser == "user" && (
              <LoginForm onClose={closeModal} onCreate={handleLogin} />
            )}
            {typeUser == "producteur" && (
              <LoginFormProducteur
                onClose={closeModal}
                onCreate={handleLoginProducteur}
              />
            )}
          </>
        );

      case "signin":
        return (
          <>
            <button className="btn" onClick={handleTypeUser}>
              {typeUser}
            </button>
            {typeUser == "user" && (
              <SigninForm onClose={closeModal} onCreate={handleSignin} />
            )}
            {typeUser == "producteur" && (
              <SigninFormProducteur
                onClose={closeModal}
                onCreate={handleSigninProducteur}
              />
            )}
            {/* <SigninForm onClose={closeModal} onCreate={handleSignin} /> */}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <header className="w-full sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex justify-between items-center w-full screen-max-width">
        <p>Kalykil {connected == false ? "false" : "true"} </p>

        {isConnected === true ? null : (
          <div className="flex flex-1  justify-center max-sm:hidden ">
            {navLists.map((nav) => {
              return (
                <a
                  href={`#${nav.replace(" ", "")}`}
                  key={nav}
                  className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                >
                  {nav}
                </a>
              );
            })}
          </div>
        )}

        {connected == true ? (
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <button
              className="btn bg-red-500 text-white"
              onClick={() => logOut()}
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <button onClick={() => openModal("signin")}>S'inscrire</button>
            <button
              onClick={() => openModal("login")}
              className="btn text-white"
            >
              Se connecter
            </button>
          </div>
        )}
      </nav>
      <Modal isOpen={modal.type !== null} onClose={closeModal}>
        {renderModalContentAuth()}
      </Modal>
    </header>
  );
};

export default Navbar;
