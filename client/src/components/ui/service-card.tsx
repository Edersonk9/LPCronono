interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 h-full">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <i className={`${icon} text-2xl text-primary`}></i>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
