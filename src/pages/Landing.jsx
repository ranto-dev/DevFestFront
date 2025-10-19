import Banner from "../components/banner/banner.jsx";
import Hero from "../components/hero/Hero.jsx";
import Model from "../components/Model.jsx";
import Navbar from "../components/Navbar.jsx";
import Service from "../components/Service/Service.jsx";
import Img1 from "../../public/assets/about/Fruit.png";
import Img2 from "../../public/assets/about/legumes.png";
import About from "../components/about/about.jsx";
import { KitchenModel } from "../components/kitchen/kitchenModel.jsx";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { AmbientLight } from "three";

const Landing = () => {
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
      <Navbar />
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
            {/* <Canvas
              camera={{
                position: [0, 15, -15],
                fov: 50,
              }}
            >
              <Environment preset="sunset" />
              <ambientLight intensity={.5} />
              <OrbitControls target={[3, 5, 0]} />
              <KitchenModel scale={30} />
            </Canvas> */}
          </div>
        </div>

        <div
          className="flex flex-col items-center opacity-0 translate-y-20"
          id="cta"
        >
          <a href="#highlights" className="btn">
            Commencer maintenant
          </a>
        </div>
      </Hero>
      <About />
      <div className="my-20">
        <Banner {...BannerData} reverse={false} />
        <Banner {...BannerData2} reverse={true} />
      </div>
      <Service />
      <Model />
    </main>
  );
};

export default Landing;
