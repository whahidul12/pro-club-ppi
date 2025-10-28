import React from "react";
import { FaCode } from "react-icons/fa";

const ActivitiesCard = ({ card }) => {
  const { icon, title, description } = card;
  return (
    <div className="col-span-1 mx-auto w-5/6 rounded-2xl bg-[#DEDEDE] px-4 py-8 text-center text-white shadow-2xl duration-200 hover:-translate-y-2 sm:w-full sm:max-w-fit md:p-8">
      <h4 className="mx-auto w-fit animate-bounce text-5xl text-[#2B7FFF]">
        {icon}
      </h4>
      <h3 className="my-4 bg-[linear-gradient(90deg,#FFA59D_0%,#F0588C_20%,#727AF9_100%)] bg-clip-text text-2xl font-bold text-transparent">
        {title}
      </h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

export default ActivitiesCard;
