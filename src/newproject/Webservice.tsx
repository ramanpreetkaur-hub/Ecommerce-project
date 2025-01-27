import React, { useEffect, useState } from 'react';


  


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="p-6">
    
     <img  src="" alt="" className='w-[400vh]' />   
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-1 gap-8  border-l-orange-300 border-l-2 border-r-2 border-r-orange-300 transition-transform group-hover:ease-in-out pl-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="border rounded-lg p-4 pl-7   shadow hover:shadow-xl  transition ease-out relative  ; "
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-40  h-40 object-cover rounded-lg  border-t-2 border-orange-300 border-b-2 border-b-gray-400 mb-4 pl-0  "
              />
              <h2 className="text-xl font-semibold absolute right-[70%] top-20 flex justify-center items-center ">{service.name}</h2>
              <p className="text-gray-500 mb-4 absolute right-[40%]    top-20  text-md whitespace-normal break-words w-64  ">{service.description}</p>
              <p className="font-bold text-blue-600 text-lg mb-2 absolute right-[25%] top-20">
                ${service.price}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-orange-400  absolute right-4 top-20">
                Learn More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading services...</p>
      )}
    </div>
  );
};

export default Services;
