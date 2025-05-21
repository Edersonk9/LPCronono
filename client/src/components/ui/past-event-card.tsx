interface PastEventCardProps {
  image: string;
  title: string;
  date: string;
}

const PastEventCard = ({ image, title, date }: PastEventCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <a href="#" className="px-4 py-2 bg-primary text-white font-medium rounded-lg">Ver resultados</a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <i className="ri-calendar-line mr-2"></i>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
