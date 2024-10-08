import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../animations/animate";

function NavBar() {
  return (
    <>
      <div className="z-10 container mx-auto flex px-6 py-4 lg:px-12">
        <div className="flex items-center justify-center md:justify-between w-full space-x-4 text-theme">
          <motion.img
            variants={SlideRight(0.4, 50)}
            initial="initial"
            whileInView="animate"
            src="/icon.png"
            alt="logo"
            width={48}
            height={48}
            className="flex"
          />
          <motion.a
            href="#"
            className="font-bold tracking-widest text-5xl md:pl-20 text-transparent bg-clip-text"
            whileInView={{
              backgroundImage: [
                "linear-gradient(to right,#F25961, #333399)",
                "linear-gradient(to right,#333399, #F25961)",
                "linear-gradient(to right,#F25961, #333399)",
              ],
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            PALHADES
          </motion.a>

          <motion.a
            variants={SlideLeft(0.4, 150)}
            initial="initial"
            whileInView="animate"
            href="#"
            className="hidden md:flex py-3 px-6 bg-theme text-white hover:bg-header rounded-full shadow hover:shadow-xl transition duration-400"
          >
            <span>Get an Appointment</span>
          </motion.a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
