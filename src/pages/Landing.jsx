import Banner from "../components/banner/banner.jsx";
import Hero from "../components/hero/Hero.jsx";
import Model from "../components/Model.jsx";
import Navbar from "../components/Navbar.jsx";
import Service from "../components/Service/Service.jsx";
import Img from "../../public/assets/images/explore1.jpg";
import About from "../components/about/about.jsx";

const Landing = () => {
  const BannerData = {
    image: Img,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Personnalized Professionnal Online Tutor on Your Schedule",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere beatae expedita dolorem magnam assumenda reprehenderit recusandae amet quas odit, inventore vitae nulla. Sunt aliquam vel in nostrum molestias, ullam deleniti?",
  };

  const BannerData2 = {
    image: Img,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Personnalized Professionnal Online Tutor on Your Schedule",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere beatae expedita dolorem magnam assumenda reprehenderit recusandae amet quas odit, inventore vitae nulla. Sunt aliquam vel in nostrum molestias, ullam deleniti?",
  };
  return (
    <main>
      <Navbar />
      <Hero>
        <div className="h-5/6 w-full flex-center flex-col">
          <div className="grid h-screen place-content-center bg-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            vel quia pariatur, quo eum in! Aliquid excepturi, autem quisquam
            voluptate enim voluptatum id unde magnam corrupti eius nihil
            inventore reiciendis!
          </div>

          <div className="md:w-10/12 w-9/12">3d model</div>
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
      <Banner {...BannerData} reverse={false} />
      <Banner {...BannerData2} reverse={true} />
      <Service />
      <Model />
    </main>
  );
};

export default Landing;
