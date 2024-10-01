import { FirstAid, Book } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";

function FeaturesSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4 md:p-10 cursor-default justify-evenly">
        <motion.div
          variants={SlideUp(0.2, 100)}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center shadow-sm hover:shadow-2xl transition duration-300 rounded-lg w-4/5 md:w-1/4 bg-white"
        >
          <div className="rounded-full mt-10 p-5 bg-purple-500 text-white">
            <FirstAid size={36} />
          </div>
          <p className="text-xl font-semibold my-6 text-purple-900">
            Safety First
          </p>
          <p className="w-2/3 md:text-lg text-center mb-10  text-gray-600">
            Prioritizing passenger safety with well-maintained vehicles and
            trained drivers
          </p>
        </motion.div>
        <motion.div
          variants={SlideUp(0.4, 100)}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center text-white shadow-sm hover:shadow-2xl hover:text-purple-50 hover:bg-violet-500 transition duration-300 rounded-lg w-4/5 md:w-1/4 bg-purple-500"
        >
          <div className="rounded-full mt-10 p-5 bg-white text-purple-500">
            <Book size={36} />
          </div>
          <p className="text-xl font-semibold my-6">Convenient Booking</p>
          <p className="w-2/3 md:text-lg text-center mb-10">
            Easy and flexible booking options tailored to individual needs
          </p>
        </motion.div>
        <motion.div
          variants={SlideUp(0.6, 100)}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center shadow-sm hover:shadow-2xl transition duration-300 rounded-lg w-4/5 md:w-1/4 bg-white"
        >
          <div className="rounded-full mt-10 p-5 bg-purple-500 text-white">
            <FirstAid size={36} />
          </div>
          <p className="text-xl text-center font-semibold m-6 text-purple-900">
            Comprehensive Services
          </p>
          <p className="w-2/3 md:text-lg text-center mb-10 text-gray-600">
            A one-stop solution for all travel needs, from cab services to tour
            packages and ticket bookings
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default FeaturesSection;
