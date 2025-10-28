import React from "react";
import ButtonCompo from "../../Components/ButtonCompo/ButtonCompo";
import Hero from "../../Layouts/Hero/Hero";
import IntroductionSection from "../../Layouts/IntroductionSection/IntroductionSection";
import MissionVissionSection from "../../Layouts/MissionVissionSection/MissionVissionSection";
import OurActivities from "../../Layouts/OurActivities/OurActivities";
import Accordion from "../../Components/Accordion/Accordion";

const Home = () => {
  return (
    <>
      <Hero />
      <IntroductionSection />
      <OurActivities />
      <MissionVissionSection />
      <Accordion />
    </>
  );
};

export default Home;
