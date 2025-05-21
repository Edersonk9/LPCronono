import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <i className="ri-timer-flash-line text-primary text-3xl mr-2"></i>
              <span className="text-2xl font-heading font-bold">Cronono</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Cronometragem profissional para eventos esportivos. Precisão, confiabilidade e resultados em tempo real.
            </p>
            <div className="mt-6 flex space-x-4">
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
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#eventos" className="text-gray-300 hover:text-primary transition-colors">Eventos</a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-primary transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary transition-colors">Contato</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Área do Atleta</h3>
            <p className="text-gray-300 mb-4">
              Acesse sua área exclusiva para consultar seus resultados e certificados.
            </p>
            <a href="#" className="inline-flex items-center px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-opacity-90 transition-all">
              <i className="ri-user-line mr-2"></i> Entrar / Cadastrar
            </a>
            
            <div className="mt-6">
              <div className="flex items-center mb-2">
                <i className="ri-mail-line text-primary mr-2"></i>
                <span className="text-gray-300">contato@cronono.com.br</span>
              </div>
              <div className="flex items-center">
                <i className="ri-whatsapp-line text-primary mr-2"></i>
                <span className="text-gray-300">(21) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Cronono - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
