import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../animations/animate";

export const Testimonial = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col w-full mt-16">
        <div className="flex flex-col gap-4 md:w-1/3 m-16 md:text-left text-center">
          <motion.p
            variants={SlideRight(0.2, 100)}
            initial="initial"
            whileInView="animate"
            className="text-lg text-purple-700 font-semibold"
          >
            TESTIMONIAL
          </motion.p>
          <motion.p
            variants={SlideRight(0.4, 100)}
            initial="initial"
            whileInView="animate"
            className="text-4xl text-purple-900 md:text-left md:w-1/2 font-semibold"
          >
            Customer Feedback & Reviews
          </motion.p>
          <motion.p
            variants={SlideRight(0.6, 100)}
            initial="initial"
            whileInView="animate"
            className="text-lg text-slate-600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row md:w-2/3 m-6 md:m-16 gap-4 text-gray-500">
          <motion.div
            variants={SlideUp(0.2, 100)}
            initial="initial"
            whileInView="animate"
            className="p-6 bg-gray-100 rounded-xl"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              facere, nostrum dicta expedita, facilis illum dolorum ad delectus
              mollitia illo quisquam voluptas blanditiis maxime quos
              voluptatibus itaque dignissimos. Ex, natus.
            </p>
            <p className="text-end mt-10 text-purple-600">- Monika Alba</p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.4, 100)}
            initial="initial"
            whileInView="animate"
            className="p-6 bg-gray-100 rounded-xl"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              amet animi libero, accusamus accusantium veritatis magni
              temporibus corrupti totam cupiditate eius explicabo, debitis
              dolorem, vitae quia blanditiis. Accusantium, numquam impedit!
            </p>
            <p className="text-end mt-10 text-purple-600">- Monika Alba</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
