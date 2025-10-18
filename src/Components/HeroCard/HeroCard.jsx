import React from "react";

const HeroCard = ({ img }) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="content">
        <div className="title">Welcome to</div>
        <div className="name">Programming Club - PPI</div>
        <div className="des">
          Empowering students through code, creativity, and collaboration
        </div>
        <div className="btn">
          <button>See More</button>
          <button>Watch video</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
