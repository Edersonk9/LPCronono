import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FeaturedEventSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Competição de ciclismo profissional com equipamentos de cronometragem" 
              className="w-full h-auto rounded-2xl shadow-lg" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-lg text-primary font-semibold text-sm mb-4">
              Em destaque
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Maratona Vale do Rio 2023</h2>
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <i className="ri-calendar-line text-primary mr-2"></i>
                <span>12 de Junho, 2023</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line text-primary mr-2"></i>
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
            
            <p className="mt-6 text-gray-600">
              A maior maratona do Vale do Rio chega à sua 5ª edição com percursos de 5km, 10km, 21km e maratona completa. Cronometragem oficial Cronono com resultados em tempo real e categorias por idade.
            </p>
            
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                <span>4 modalidades de corrida</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                <span>Premiação para todas as categorias</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                <span>Chip de cronometragem descartável</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <a href="#">Ver detalhes</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventSection;
