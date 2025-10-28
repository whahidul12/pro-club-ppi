import React from "react";
import ActivitiesCard from "../../Components/ActivitiesCard/ActivitiesCard";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
const data = [
  {
    icon: <FaCode />,
    title: "What We Do",
    description:
      "We dive into real-world projects, hackathons, and coding challenges, giving members hands-on experience in building solutions that matter.",
  },
  {
    icon: <FaLaptopCode />,
    title: "What We Learn",
    description:
      "From web and mobile development to AI and cybersecurity, our sessions cover a range of skills designed to make you a versatile coder and creator.",
  },
  {
    icon: <FaLightbulb />,
    title: "What We Create",
    description:
      "Whether it's apps, games, websites, or data-driven solutions, we turn ideas into impactful projects that showcase creativity and skill.",
  },
  {
    icon: <RiUserCommunityFill />,
    title: "How We Connect",
    description:
      "Collaborate with fellow tech enthusiasts, join study groups, and attend inspiring talks by industry professionals to keep growing together.",
  },
  {
    icon: <FaRocket />,
    title: "How We Innovate",
    description:
      "We encourage creative problem-solving and foster an environment where new ideas thrive. From brainstorming sessions to project showcases, we provide a platform to bring innovative solutions to life.",
  },
  {
    icon: <BsGraphUpArrow />,
    title: "How We Grow",
    description:
      "Our club is committed to personal and professional growth. Members gain mentorship, develop soft skills, and build a network that supports both current learning and future opportunities.",
  },
];

const OurActivities = () => {
  return (
    <section className="-mt-0.5 w-full bg-[linear-gradient(0deg,#fff_0%,#2B7FFF_95%)] py-6 md:py-10">
      <div className="mx-4 md:mx-8">
        <h2 className="mb-8 text-center text-4xl text-white md:mb-16 md:text-5xl">
          What We Do
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {data.map((card, index) => (
            <ActivitiesCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurActivities;
