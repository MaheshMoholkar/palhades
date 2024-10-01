import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../animations/animate";

export const Contact = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col md:flex-row p-6 bg-white rounded-xl w-full">
          <motion.div
            variants={SlideRight(0.2, 150)}
            initial="initial"
            whileInView="animate"
            className="md:w-9/12"
          >
            <h2 className="flex items-center h-full text-3xl text-purple-900 md:ml-24 md:mb-0 mb-12">
              Get an Appointment
            </h2>
          </motion.div>
          <form className="flex flex-col gap-3 md:w-3/12 ">
            <motion.input
              variants={SlideUp(0.2, 50)}
              initial="initial"
              whileInView="animate"
              type="text"
              placeholder="Email"
              className="h-12 rounded-3xl bg-gray-100 p-4"
            />
            <motion.button
              variants={SlideUp(0.4, 50)}
              initial="initial"
              whileInView="animate"
              onClick={onSubmit}
              className="h-12 rounded-3xl text-white font-bold bg-purple-700"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};
