import banner from './banner.jpg';
const Home = (props) => {
  return (
    <div className="h-max bg-cover bg-center h-full bg-[url('${banner}')] rounded-b-[50px]" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 text-white">{props.heading1}</h1>
            <p className="text-lg mb-6 pr-10 text-white">{props.content1}</p>
            <div className="flex space-x-4">
              <button className="hover:text-black bg-blue-400 hover:bg-white text-slate-50 font-bold py-2 px-4 rounded">{props.action1}</button>
            </div>  
          </div>
          <div className="md:w-1/2 ">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="w-fit h-fit rounded-lg transition duration-500 ease-in-out transform hover:scale-95"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.defaultProps = {
  action1: 'Join Us',
  content1: 'SPEFIX is your reliable IT partner providing comprehensive solutions for your business. We specialize in turnkey project development and the implementation of smart technologies to help your company reach new heights.',
//   action2: 'Secondary action',
  image1Src: 'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400', //just kept a random image
  image1Alt: 'PlaceholderImage',
  heading1: 'SPEFIX is the Future',
};



export default Home;
