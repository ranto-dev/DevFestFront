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
      <Hero />
      <About />
      <Banner {...BannerData} reverse={false} />
      <Banner {...BannerData2} reverse={true} />
      <Service />
      <Model />
    </main>
  );
};

export default Landing;
