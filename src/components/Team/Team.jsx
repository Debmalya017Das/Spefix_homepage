import image from './photos/image.png'
import image1 from './photos/image1.png'
import image2 from './photos/image2.png'
import image3 from './photos/image3.png'
const TeamMember = ({ image, category, name, socialLinks }) => (
  <div className="team-member relative mb-24 px-2">
    <div className="bg-blue-100 rounded-3xl pt-24 pb-8 px-6 text-center group h-full">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 md:w-48 md:h-48 rounded-full absolute -top-20 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:-top-24"
      />
      <div className="mt-4">
        <span className="text-indigo-600 text-sm">{category}</span>
        <h4 className="text-xl font-semibold mt-2 mb-4">{name}</h4>
        <ul className="flex justify-center space-x-2">
          {socialLinks.map((link, index) => (
            <li key={index}>
              
               <a href={link.url}
                className="bg-white text-blue-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-blue-800 hover:text-white"
              >
                <i className={`fab fa-${link.platform}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      image: image1,     
      category: "UX Teacher",
      name: "Hughie Campbel",
      socialLinks: [
        { platform: "facebook", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      image: image,
      category: "Graphic Teacher",
      name: "Cindy Walker",
      socialLinks: [
        { platform: "facebook", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      image: image3,
      category: "Full Stack Master",
      name: "David Hutson",
      socialLinks: [
        { platform: "facebook", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      image: image2,
      category: "Digital Animator",
      name: "Stella Blair",
      socialLinks: [
        { platform: "facebook", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    }
  ];

  return (
    <div className="team pt-20 pb-18" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-4">Our Team</h1>
          <h2 className="mt-4 text-lg text-gray-500 pb-5">Meet the talented individuals who make our company thrive.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;