import { motion } from "framer-motion";
import { stats } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={item}>
              <div className="text-primary text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
