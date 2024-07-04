const PricingCard = ({ title, price, features, buttonText, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <div className="px-6 py-8">
      <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500 ml-2">MONTHLY</span>
      </div>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-3">
            <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-900 text-white rounded-full py-2 px-4 hover:bg-gray-800 transition duration-200">
        {buttonText}
      </button>
    </div>
    <div className="bg-gray-100 px-6 py-4">
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  </div>
);

export default PricingCard;