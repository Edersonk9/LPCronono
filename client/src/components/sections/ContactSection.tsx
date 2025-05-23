import { motion } from "framer-motion";
import ContactForm from "@/components/ui/contact-form";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Entre em contato</h2>
            <p className="mt-4 text-gray-300">
              Fale conosco para organizar seu evento ou tirar dúvidas sobre nossos serviços de cronometragem
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-map-pin-line text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-600">Av. República do Chile, 230 - Centro, Rio de Janeiro - RJ, 20031-170</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-mail-line text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">edersonk9@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-whatsapp-line text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-600">(21) 99999-9999</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                  <i className="ri-facebook-line text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <i className="ri-linkedin-line text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="YouTube">
                  <i className="ri-youtube-line text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700"
          >
            <h3 className="text-xl font-heading font-semibold mb-6">Envie sua mensagem</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
