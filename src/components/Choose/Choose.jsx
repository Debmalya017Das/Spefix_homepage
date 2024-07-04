const Choose= () => {
  return (
    <div className="bg-slate-50">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 ">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Get Scalable solutions at no initial costs - you only pay for what you use</p>
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Image on the left */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 pr-4">
          <img 
            src="https://www.promotedge.com/wp-content/uploads/2023/09/8-Reasons-Why-a-Website-is-Important-for-Your-Business-Success-1-1.webp" 
            alt="Team member" 
            className="rounded-lg shadow-lg w-auto h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Text content on the right */}
        <div className="lg:w-1/2 lg:pl-8 px-3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
            Nobody Knows Clients Like We Have Preferred
          </h2>
          <p className="mb-6 text-gray-600">
            Choose us for unparalleled expertise, innovative solutions, and a commitment to delivering exceptional value and customer satisfaction every step of the way
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-lg font-semibold text-blue-900">Expert Support</h3>
              </div>
              <p className="text-gray-600">Our team provides timely technical support and consultations.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-lg font-semibold text-blue-900">Flexible</h3>
              </div>
              <p className="text-gray-600">Scalable subscription solutions suitable for businesses of any size.</p>
            </div>
          </div>

          <div className="mt-8">
            <span className="inline-flex items-center bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
              Trusted By 9000 Clients
            </span>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};
export default Choose;