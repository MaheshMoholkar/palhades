import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";

function HeroSection() {
  return (
    <>
      <div className="flex cursor-default justify-center md:block">
        <div className="h-screen md:w-2/5 p-10">
          <div className="flex flex-col items-center">
            <motion.div
              variants={SlideUp(0.6, 50)}
              initial="initial"
              whileInView="animate"
              className="md:text-6xl text-5xl font-semibold leading-tight mt-24 md:mt-36 text-theme"
            >
              Your Trusted Partner in Ground Transportation Solutions
            </motion.div>
            <motion.div
              variants={SlideUp(0.8, 50)}
              initial="initial"
              whileInView="animate"
              className="text-xl md:-ml-20 font-semibold text-header mt-10"
            >
              Seamless Travel Solutions Tailored to Your Needs
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
