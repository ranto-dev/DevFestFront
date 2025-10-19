import { useState } from "react";

const SigninFormProducteur = ({ onClose, onCreate }) => {
  const [signInfo, setSignInfo] = useState({
    username: "",
    email: "",
    full_name: "",
    password: "",
    conf_password: ""
  });
  
  const handleChange = (e) => {
    setSignInfo({ ...signInfo, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signInfo.username || !signInfo.password)
      return alert("Tous les champs sont requis !");
    onCreate(signInfo);
    onClose();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-h-[90vh] overflow-y-scroll text-black">
      <h1 className="text-center text-3xl text-black ">Formulaire d'inscription</h1>
      <div className="space-y-2">
        <div>
          <label className="text-black" htmlFor="full_name">
            votre nom complet
          </label>
          <input
            type="text"
            name="full_name"
            value={signInfo.full_name}
            onChange={handleChange}
            id="full_name"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="ex: Lucas Moreau"
          />
        </div>
        <div>
          <label className="text-black" htmlFor="username">
            Nom d'utilisateur producteur
          </label>
          <input
            type="text"
            name="username"
            value={signInfo.username}
            onChange={handleChange}
            id="username"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="ex: lucas05"
          />
        </div>
        <div>
          <label className="text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={signInfo.email}
            onChange={handleChange}
            id="email"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="ex: locas05@gmail.com"
          />
        </div>
        <div>
          <label className="text-black" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            value={signInfo.password}
            onChange={handleChange}
            id="password"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="**********"
          />
        </div>
        <div>
          <label className="text-black" htmlFor="conf_password">
            Confirmer votre mot de passe
          </label>
          <input
            type="password"
            name="conf_password"
            value={signInfo.conf_password}
            onChange={handleChange}
            id="conf_password"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="**********"
          />
        </div>
        
        
       
      </div>
      <div>
        <button
          type="submit"
          className="btn"
        >
          S'inscrire
        </button>
      </div>
    </form>
  );
};

export default SigninFormProducteur;
