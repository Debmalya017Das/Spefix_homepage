import Slider from 'react-slick';
import PricingCard from "./PricingCard";
import { priceData } from "./PriceData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Pricing.css';

const Pricing = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Pricing</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Choose the perfect plan for your needs</p>
        
        <Slider {...settings}>
          {priceData.map((plan, index) => (
            <div key={index} className="px-2">
              <PricingCard {...plan} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Pricing;