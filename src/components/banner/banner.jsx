import { motion } from "framer-motion";
import { SlideUp } from "../../utils/SlideAnimation.js";

const Banner = ({ image, tag, title, subtitle, reverse }) => {
  return (
    <div className="bg-[#f9f9f9] py-10">
      <div className="w-[90%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          <div
            className={`flex justify-start items-center ${
              reverse && "md:order-last md:justify-end"
            } `}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt=""
              className="w-[400px] h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] ">
            <motion.p
              variants={SlideUp(0.2)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-orange-600  font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView={"visible"}
              className="text-xl lg:text-2xl font-semibold capitalize"
            >
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <button className="bg-amber-300 p-3 rounded-full font-semibold">
                Get started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
