import { motion } from "framer-motion";
import PastEventCard from "@/components/ui/past-event-card";
import { pastEvents } from "@/lib/constants";

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

const PastEventsSection = () => {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Eventos Realizados</h2>
          <p className="mt-4 text-gray-600">
            Galeria de eventos com resultados disponíveis para consulta
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pastEvents.map((event, index) => (
            <motion.div key={index} variants={item}>
              <PastEventCard
                image={event.image}
                title={event.title}
                date={event.date}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PastEventsSection;
