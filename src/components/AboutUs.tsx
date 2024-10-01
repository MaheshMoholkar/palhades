import { useState } from "react";
import Video from "./Video";
import { Play, Pause, Repeat } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  SlideDown,
  SlideLeft,
  SlideRight,
  SlideUp,
} from "../animations/animate";

function AboutUs() {
  const [playing, setPlaying] = useState(false);
  const [replay, setReplay] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handlePlay = () => {
    setPlaying(true);
    setShowLogo(false);
  };
  const handlePause = () => {
    setPlaying(false);
    setShowLogo(false);
  };
  const handleReplay = () => {
    setReplay(true);
    setShowLogo(false);
  };

  return (
    <>
      <div className="md:grid grid-cols-2 md:p-10 p-4 my-10 md:my-0">
        <div className="hidden md:flex aspect-w-5 aspect-h-3">
          <Video
            playing={playing}
            replay={replay}
            setReplay={setReplay}
            showLogo={showLogo}
            setShowLogo={setShowLogo}
            setPlaying={setPlaying}
          />
        </div>
        <div className="md:w-3/4 ml-10 mt-7 cursor-default">
          <motion.div
            variants={SlideDown(0.2, 50)}
            initial="initial"
            whileInView="animate"
            className="text-header font-bold"
          >
            ABOUT US
          </motion.div>
          <motion.div
            variants={SlideUp(0.4, 50)}
            initial="initial"
            whileInView="animate"
            className="text-theme font-bold text-3xl my-6"
          >
            Welcome to Palhade's B2C Services, your top choice for personal
            ground transportation in Pune.
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6, 50)}
            initial="initial"
            whileInView="animate"
            className="my-4 border-l-4 border-fuchsia-600 pl-5 text-gray-600 text-lg"
          >
            We prioritize safety, comfort, and customer satisfaction, offering a
            variety of travel services tailored to your needs. From daily
            commutes to special events, our professional drivers and
            well-maintained vehicles deliver a seamless travel experience.
          </motion.div>
          <motion.div
            variants={SlideUp(0.8, 50)}
            initial="initial"
            whileInView="animate"
            className="font-semibold text-slate-600 text-xl"
          >
            Choose us for reliable, convenient, and high-quality travel
            services.
          </motion.div>
          <div className="hidden md:flex items-center gap-4 justify-between">
            <motion.div
              variants={SlideRight(1, 50)}
              initial="initial"
              whileInView="animate"
              className="flex gap-4"
            >
              <Repeat
                size={32}
                className="text-purple-500 cursor-pointer hover:opacity-80 active:scale-110"
                onClick={handleReplay}
              />
              <Play
                size={32}
                className="text-header cursor-pointer hover:opacity-80 active:scale-110"
                onClick={handlePlay}
              />
              <Pause
                size={32}
                className="text-theme cursor-pointer hover:opacity-80 active:scale-110"
                onClick={handlePause}
              />
            </motion.div>

            <motion.div
              variants={SlideLeft(1.2, 50)}
              initial="initial"
              whileInView="animate"
              className="my-6"
            >
              <div className="flex py-3 px-6 cursor-pointer bg-theme text-white hover:bg-header rounded-full shadow hover:shadow-xl transition duration-400">
                <span className="hidden md:block">Discover </span>
                <span className="ml-1"> more</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
