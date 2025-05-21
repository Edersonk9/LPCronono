import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold max-w-3xl mx-auto">
            Organize seu evento com a melhor cronometragem do mercado
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta para garantir resultados precisos e experiência inesquecível para todos os participantes.
          </p>
          <div className="mt-8">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <a href="#contato">Solicitar orçamento</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
