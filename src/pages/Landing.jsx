import Banner from "../components/banner/banner.jsx";
import Hero from "../components/hero/Hero.jsx";
import Navbar from "../components/Navbar.jsx";

import Img1 from "../../public/assets/about/Fruit.png";
import Img2 from "../../public/assets/about/legumes.png";
import About from "../components/about/about.jsx";
import { KitchenModel } from "../components/kitchen/kitchenModel.jsx";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { AmbientLight } from "three";
import { IPhone } from "../components/IPhone.jsx";
import Footer from "../components/layout/footer.jsx";

const Landing = ({ isConnected, setIsConnected }) => {
  const BannerData = {
    image: Img1,
    tag: "Avoir un repas copieux pour la journée",
    title: "Il n'y a pas de chances de vous rater dans vos courses ",
    subtitle:
      " L'application vous donne une belle recette en fonction des denrées en haute présence dans la région, en faisant vos courses, il est de ce fait presque infaillible de rentrer les mains vides",
  };

  const BannerData2 = {
    image: Img2,
    tag: "Il n'y a pas que pour les consommateurs",
    title: "Les produits sont d'origine locale",
    subtitle:
      "Non seulement les consomateurs peuvent bénéficier d'une liste de denrées en forte présence dans leur entourage mais les producteurs peuvent aussi utiliser les données pour faire office de Matraquage de leur produits, car c'est les leurs que les consommateurs achètent  ",
  };
  return (
    <main>
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <Hero>
        <div className="h-5/6 w-full flex-center flex-col">
          <div className="grid text-4xl text-center w-[50%] text-white h-screen place-content-center">
            Une IA qui s'assure que vous ne mangez pas n'importe quoi et ne
            dépassiez pas 'vos 'bornes
          </div>
          <div
            className="w-full h-[100vh] absolute top-2 "
            style={{ zIndex: -1 }}
          >
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
          </div>
        </div>

        <div
          className="flex flex-col items-center opacity-0 translate-y-20"
          id="cta"
        >
          <a href="#highlights" className="btn text-white">
            Commencer maintenant
          </a>
        </div>
      </Hero>
      <br />
      <br />
      <br />
      <br />
      <br />
      <About />
      <div className="my-20">
        <Banner {...BannerData} reverse={false} />
        <Banner {...BannerData2} reverse={true} />
      </div>
      {/* <Service /> */}
      <div className="w-full flex justify-center items-center p-20 ">
        <div className="w-[50%] h-[500px] p-10 bg-white rounded-2xl shadow-xl ">
          <form className="space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-center">
                Nous contacter
              </h1>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullname">Votre nom complet</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="text-sm w-full rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="email">Votre email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-sm w-full rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="tel">Votre numéro</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="text-sm w-full rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="fullname"
                  rows={5}
                  id="fullname"
                  className="text-sm w-full rounded-xl p-2"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn text-white">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <div className="w-full h-[500px] flex justify-center items-center">
          <Canvas>
            <ambientLight intensity={1} />
            <Environment preset="city" />
            <OrbitControls />
            <IPhone scale={[30, 30, 30]} />
          </Canvas>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Landing;
