import React from "react";
import introduction_video from "../../assets/Videos/introduction_video.mp4";
import { FaCircle } from "react-icons/fa";

const IntroductionSection = () => {
  return (
    <section className="-mt-1 w-full bg-[linear-gradient(0deg,#2B7FFF_5%,#fff_100%)] py-10 md:py-20">
      <div className="md:mx-8">
        <h2 className="mx-auto mb-4 flex w-fit items-center rounded-3xl bg-[#161616] px-4 py-2 text-xs text-white">
          <FaCircle className="mr-1 text-[#2B7FFF]" /> Introduction
        </h2>
        <div className="mx-4 flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#DEDEDE] p-4 md:mx-auto md:p-8 lg:flex-row">
          {/* Video Section */}
          <div className="">
            <video
              className="mx-auto h-auto w-[500px] rounded-lg lg:w-[650px]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={introduction_video} type="video/mp4" />
            </video>
          </div>

          {/* Text Section */}
          <div className="flex w-full flex-col justify-center">
            <h2 className="mb-4 bg-[linear-gradient(90deg,#FFA59D_0%,#F0588C_20%,#727AF9_100%)] bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              Welcome to Our Programming Club – The Hub for Future Developers
            </h2>
            <p className="mb-6 hidden text-justify text-black md:block">
              We're a community of passionate programmers, coders, and tech
              enthusiasts who believe in learning by doing. Whether you're a
              beginner just starting out or an experienced developer looking to
              collaborate, our club is the perfect place to grow your skills,
              build projects, and connect with like-minded peers.
            </p>
            <ul className="list-inside list-disc space-y-2 text-xs text-black sm:text-sm">
              <li>Weekly coding sessions and hands-on workshops</li>
              <li>Real-world projects, open-source contributions</li>
              <li>Tech talks, webinars, and guest speaker events</li>
              <li>Peer mentoring and collaborative learning</li>
              <li>Hackathons, coding challenges, and competitions</li>
              <li>Resources and guidance on career paths in tech</li>
              <li>A supportive community for all skill levels</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
