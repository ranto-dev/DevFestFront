import { useState } from "react";
import { navLists } from "../constants";
import LoginForm from "./authentification/loginForm.jsx";
import SigninForm from "./authentification/signinForm.jsx";
import Modal from "./layout/modal.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({ type: null });
  const [isConnected, setIsConnected] = useState(true);

  const LogOut = (e) => {
    alert("handleLogout");
  };

  const openModal = (type) => {
    setModal({ type });
  };

  const closeModal = () => {
    setModal({ type: null });
  };

  const handleLogin = () => {
    alert("handleLogin");
  };

  const handleSignin = () => {
    alert("handleSignin");
  };

  const renderModalContentAuth = () => {
    const { type } = modal;

    if (!type) return null;

    switch (type) {
      case "login":
        return <LoginForm onClose={closeModal} onCreate={handleLogin} />;

      case "signin":
        return <SigninForm onClose={closeModal} onCreate={handleSignin} />;

      default:
        return null;
    }
  };

  return (
    <header className="w-full sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex justify-between items-center w-full screen-max-width">
        <p>Your App</p>

        {isConnected === true ? null : (
          <div className="flex flex-1  justify-center max-sm:hidden ">
            {navLists.map((nav) => {
              return (
                <div
                  key={nav}
                  className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                >
                  {nav}
                </div>
              );
            })}
          </div>
        )}

        {isConnected === true ? (
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <button
              onClick={() => openModal("logout")}
              className="btn"
              style={{ backgroundColor: "red" }}
            >
              Se deconnecter
            </button>
          </div>
        ) : (
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <button onClick={() => openModal("signin")}>S'inscrire</button>
            <button onClick={() => openModal("login")} className="btn">
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
