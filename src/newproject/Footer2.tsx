import React, { useRef } from 'react'
import * as yup from "yup";

const emailvalidation=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const validation =yup.object().shape({
useremail: yup.string().email().matches(emailvalidation, 'Invalid email format').required(),
});

const signupvalidator = validation;
const Footer2 = () => {
            const formRef = useRef<HTMLFormElement>(null);
    
              const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            
                const formElement = formRef.current;
                if (!formElement) return;
            
                const formData = new FormData(formElement);
                const data = Object.fromEntries(formData.entries());
                const stringFieldData = JSON.stringify(data);
            
                localStorage.setItem('userData', stringFieldData);
            try {
              signupvalidator.validateSync(data, {
                abortEarly: false,
              });
            } catch (error) {
              console.log(error);
            }
          };
  return (
    <div >
          {/* <div>what Customers says</div>
          <input type="text" name="review box" id="review box" className='w-full h-full border-black' /> */}
          
    <div> <section className="py-16 bg-orange-300 text-black">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Get the latest updates and special offers straight to your inbox.</p>
      <form ref={formRef} onSubmit={handleSubmit}className="flex justify-center items-center">

        <input
          type="email"
          placeholder="Enter your email"
          name = "Useremail"
          className="px-4 py-2 rounded-l-lg w-1/2 max-w-lg focus:outline-none"
        />
        <button className="bg-gray-800  text-white hover:text-black px-6 py-2 rounded-r-lg hover:bg-gray-100 transition duration-200">
          Subscribe
        </button>
      </form>
    </div>
  </section>
   
  {/* Footer */}
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
    </div>
  </footer></div>
  </div>
  )
}

export default Footer2        