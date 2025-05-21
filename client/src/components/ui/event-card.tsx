interface EventCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  location: string;
}

const EventCard = ({ image, category, date, title, location }: EventCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-primary/10 px-3 py-1 rounded-lg text-primary font-medium text-sm">
            {category}
          </div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 mb-4">
          <i className="ri-map-pin-line mr-2"></i>
          <span>{location}</span>
        </div>
        <a href="#" className="inline-flex items-center font-medium text-primary">
          Saiba mais <i className="ri-arrow-right-line ml-1"></i>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
