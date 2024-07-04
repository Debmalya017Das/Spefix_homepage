import { FaHeadset, FaCode, FaSearch } from 'react-icons/fa';

export const services = [
  {
    icon: {
      component: < FaSearch className="text-white text-2xl" />,
      bgColor: 'bg-purple-500',
      accentColor: 'bg-purple-500'
    },
    title: 'Smart Search',
    description: 'With high-quality search, your clients will find the desired product quickly and make purchases 50% more often.'
  },
  {
    icon: {
      component: <FaCode className="text-white text-2xl" />,
      bgColor: 'bg-red-500',
      accentColor: 'bg-red-500'
    },
    title: 'Development',
    description: 'Custom development of ANY digital solutions, from minimal scripts to mobile development.'
  },
  {
    icon: {
      component: <FaHeadset className="text-white text-2xl" />,
      bgColor: 'bg-green-500',
      accentColor: 'bg-green-500'
    },
    title: 'Chatbot Builder',
    description: 'A unique chatbot builder for the world\'s most popular messengers, as well as for websites with AI integration capabilities.'
  }
];