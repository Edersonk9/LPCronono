import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import EventCard from "@/components/ui/event-card";
import { upcomingEvents } from "@/lib/constants";

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

const UpcomingEventsSection = () => {
  return (
    <section id="eventos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Próximos Eventos</h2>
          <p className="mt-4 text-gray-600">
            Confira os próximos eventos que contarão com nossa cronometragem profissional
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {upcomingEvents.map((event, index) => (
            <motion.div key={index} variants={item}>
              <EventCard 
                image={event.image}
                category={event.category}
                date={event.date}
                title={event.title}
                location={event.location}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Ver todos os eventos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
