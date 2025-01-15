import  { useRef } from 'react'

import *as yup from 'yup'

const signupvalidator = yup.object() .shape({
  Productname : yup.string() .required() .min(7),
  price:yup.string() .required() .min(5),
  Category: yup.string() .required(),
  stock: yup.string() .required(),
  length: yup.string().required(),
  height: yup.string() .required(),
  date: yup.string() .required(),
})

const YupData = () => {
const formref = useRef<HTMLFormElement> (null)
const handleSubmit= (Event)=>{
  Event.preventDefault()
  const formElement=formref.current;
  const formData = new FormData (formElement);
  const data = Object.fromEntries(formData.entries())
  const stringfielddata = JSON.stringify(data);
  localStorage.setItem("ProductData", stringfielddata);
}

 

  
    return (
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form
          ref= {formref} onSubmit={handleSubmit}
          >
           
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="name"
              >
                Product Name
              </label>
              <input
                id="name"
                name="Productname"
                placeholder="Product Name"
                type="text"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
  
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                placeholder="Product price"
                type="text"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
  
         
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="category"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                placeholder="Category of product"
                type="text"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
  
       
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="stock"
              >
                In Stock
              </label>
              <select
                id="stock"
                name='stock'
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
  
            <h2 className="mb-5 text-lg font-semibold text-[#07074D]">
              Enter Dimensions
            </h2>
  
        
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="length"
              >
                Length (in cm)
              </label>
              <input
                id="length"
                name="length"
                placeholder="Enter length"
                type="number"
                step="0.01"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
  
            
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="width"
              >
                Width (in cm)
              </label>
              <input
                id="width"
                name="width"
                placeholder="Enter width"
                type="number"
                step="0.01"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
  
          
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="height"
              >
                Height (in cm)
              </label>
              <input
                id="height"
                name="height"
                placeholder="Enter height"
                type="number"
                step="0.01"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
  
            
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
                htmlFor="date"
              >
                Release Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
  
            
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  
  



   

export default YupData