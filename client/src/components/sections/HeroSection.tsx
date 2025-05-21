import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Cronometragem <span className="text-gradient">Profissional</span> para Corridas e Ciclismo
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Precisão, tecnologia e confiança para seus eventos esportivos. Transforme sua corrida ou competição com resultados precisos em tempo real.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium py-6 px-6 rounded-lg h-auto">
                <a href="#eventos">Ver próximos eventos</a>
              </Button>
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white py-6 px-6 rounded-lg h-auto">
                <a href="#servicos">Conheça nossos serviços</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Corredores cruzando linha de chegada com equipamento de cronometragem" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
