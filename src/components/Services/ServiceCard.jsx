const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg mx-auto shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${icon.bgColor}`}>
        {icon.component}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className={`w-12 h-1 ${icon.accentColor} mb-4`}></div>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300">
        Purchase
      </button>
    </div>
  );
};

export default ServiceCard;