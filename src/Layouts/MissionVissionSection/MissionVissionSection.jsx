import React from "react";
// import aaa from "../../../public/videos/aaa.mp4";
// import brain from "../../../public/videos/brain.gif";
// import ring from "../../../public/videos/ring.mp4";

const MissionVissionSection = () => {
  return (
    <section className="w-full bg-white">
      <h2 className="mb-8 text-center text-4xl text-white md:mb-16 md:text-5xl">
        Mission and Vision
      </h2>
      <div className="mx-4 mb-8 flex lg:mx-0 lg:mb-0">
        <div className="hidden h-96 w-1/12 bg-amber-300 lg:invisible lg:block"></div>
        <div className="mx-auto flex h-auto max-w-[400px] flex-col items-center justify-evenly rounded-b-full bg-[linear-gradient(0deg,#161616_0%,transparent_100%)] px-8 pt-8 pb-28 text-white lg:w-11/12 lg:max-w-full lg:flex-row lg:rounded-l-full lg:rounded-br-none lg:bg-[linear-gradient(90deg,#2B7FFF_0%,transparent_100%)] lg:pb-8">
          <div className="w-full lg:max-w-[300px]">
            <video autoPlay loop muted playsInline className="mx-auto h-auto">
              <source src="" type="video/mp4" />
            </video>
          </div>
          <div className="w-full max-w-[400px]">
            <h2 className="text-center">thisis a heading</h2>
            <p className="w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              possimus animi aliquid unde expedita quas quam excepturi delectus
              perspiciatis accusamus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facere possimus animi aliquid unde expedita quas
              quam excepturi delectus perspiciatis accusamus?
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-8 flex lg:mx-0 lg:mb-0">
        <div className="mx-auto flex h-auto max-w-[400px] flex-col-reverse items-center justify-evenly rounded-b-full bg-[linear-gradient(0deg,#161616_0%,transparent_100%)] px-8 pt-8 pb-28 text-white lg:w-11/12 lg:max-w-full lg:flex-row lg:rounded-r-full lg:rounded-bl-none lg:bg-[linear-gradient(90deg,transparent_0%,#161616_100%)] lg:pb-8">
          <div className="w-full max-w-[400px]">
            <h2 className="text-center">thisis a heading</h2>
            <p className="w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              possimus animi aliquid unde expedita quas quam excepturi delectus
              perspiciatis accusamus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facere possimus animi aliquid unde expedita quas
              quam excepturi delectus perspiciatis accusamus?
            </p>
          </div>
          <div className="w-full lg:max-w-[300px]">
            <video autoPlay loop muted playsInline className="mx-auto h-auto">
              <source src="" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="hidden h-96 w-1/12 bg-amber-300 lg:invisible lg:block"></div>
      </div>

      <div className="mx-4 mb-8 flex lg:mx-0 lg:mb-0">
        <div className="hidden h-96 w-1/12 bg-amber-300 lg:invisible lg:block"></div>
        <div className="mx-auto flex h-auto max-w-[400px] flex-col items-center justify-evenly rounded-b-full bg-[linear-gradient(0deg,#161616_0%,transparent_100%)] px-8 pt-8 pb-28 text-white lg:w-11/12 lg:max-w-full lg:flex-row lg:rounded-l-full lg:rounded-br-none lg:bg-[linear-gradient(90deg,#161616_0%,transparent_100%)] lg:pb-8">
          <div className="w-full lg:max-w-[300px]">
            {/* <video autoPlay loop muted playsInline className="mx-auto h-auto">
              <source src={brain} type="photo/gif" />
            </video> */}
            <img src="" alt="" className="mx-auto h-auto" />
          </div>
          <div className="w-full max-w-[400px]">
            <h2 className="text-center">thisis a heading</h2>
            <p className="w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              possimus animi aliquid unde expedita quas quam excepturi delectus
              perspiciatis accusamus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facere possimus animi aliquid unde expedita quas
              quam excepturi delectus perspiciatis accusamus?
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 -mb-1 flex lg:mx-0">
        <div className="mx-auto flex h-auto max-w-[400px] flex-col-reverse items-center justify-evenly rounded-b-full bg-[linear-gradient(0deg,#161616_0%,transparent_100%)] px-8 pt-8 pb-28 text-white lg:w-11/12 lg:max-w-full lg:flex-row lg:rounded-r-full lg:rounded-bl-none lg:bg-[linear-gradient(90deg,transparent_0%,#161616_100%)] lg:pb-8">
          <div className="w-full max-w-[400px]">
            <h2 className="text-center">thisis a heading</h2>
            <p className="w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              possimus animi aliquid unde expedita quas quam excepturi delectus
              perspiciatis accusamus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facere possimus animi aliquid unde expedita quas
              quam excepturi delectus perspiciatis accusamus?
            </p>
          </div>
          <div className="w-full lg:max-w-[300px]">
            <video autoPlay loop muted playsInline className="mx-auto h-auto">
              <source src="" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="hidden h-96 w-1/12 bg-amber-300 lg:invisible lg:block"></div>
      </div>
    </section>
  );
};

export default MissionVissionSection;
