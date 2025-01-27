import React  from 'react';
// import * as yup from "yup";
import { Link } from 'react-router-dom';
import mobile from '../assets/mobile.png';
import { likedProductsAtom, carditemsAtom } from '../newproject/Jotai';
import { useAtom } from "jotai";
import Products from './Products';

const HomePage = () => {
   const [likedProducts, setLikedProducts] = useAtom(likedProductsAtom);
          const [carditems,setCarditems] = useAtom(carditemsAtom);
        

  return (
    <div>
      
      <section
        className="relative bg-cover bg-center flex items-center justify-center h-[100vh] bg-white "
        style={{ backgroundImage: `url(${mobile})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to E-Shop</h1>
          <p className="text-lg sm:text-2xl mb-6">Discover the best products at unbeatable prices</p>
          <Link
            to="/home"
            className="bg-orange-400 text-black hover:text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition duration-200"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


{[
  { name: 'Men', image: 'https://indrikaa.com/cdn/shop/products/Slide8.jpg?v=1690567416' },
  { name: 'Women', image: 'https://miro.medium.com/v2/resize:fit:1400/0*dKfEjPBeZnlX3rZa' },
  { name: 'Electronics', image: 'https://www.shutterstock.com/image-illustration/3d-variety-home-appliances-concept-600nw-2048419898.jpg' },
  { name: 'Home Decor items', image:'https://images.meesho.com/images/products/281909249/b84uh_512.webp' },
].map((category) => (
  <Link
    to={`/category/${category.name.toUpperCase()}`}
    key={category.name}
    className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
  >
    <img
      src={category.image}
      alt={category.name}
      className="w-full h-48 object-cover"
    />
                <div className="p-4 text-lg font-bold">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             
{[
  { name: 'product 1', image: 'https://thumbs.dreamstime.com/b/pretty-beautiful-sexy-elegance-women-skin-tan-body-fashion-model-glamor-pose-wear-trend-dress-casual-clothes-party-summer-147663661.jpg' },
  { name: 'product 2', image: 'https://images.squarespace-cdn.com/content/v1/551c15cae4b07646122e7048/0e8f25d8-c1ca-4c86-8183-b3f89d54c077/How%20to%20wear%20a%20statement%20coat%20to%20work%20%7C%20smart%20casual%20outfit%20idea%20for%20women%20%7C%20Cotton%20Cashmere%20Cat%20Hair' },
  { name: 'product 3', image: 'https://assets.ajio.com/medias/sys_master/root/20241028/eCDd/671f835f260f9c41e8a70921/-473Wx593H-700659535-black-MODEL.jpg' },
  { name: 'product 4', image:'https://images.meesho.com/images/products/281909249/b84uh_512.webp' },
  { name: 'product 1', image: 'https://indrikaa.com/cdn/shop/products/Slide8.jpg?v=1690567416' },
  { name: 'product 2', image: 'https://miro.medium.com/v2/resize:fit:1400/0*dKfEjPBeZnlX3rZa' },
  { name: 'product 3', image: 'https://www.shutterstock.com/image-illustration/3d-variety-home-appliances-concept-600nw-2048419898.jpg' },
  { name: 'product 4', image:'https://images.meesho.com/images/products/281909249/b84uh_512.webp' },
  { name: 'product 1', image: 'https://indrikaa.com/cdn/shop/products/Slide8.jpg?v=1690567416' },
  { name: 'product 2', image: 'https://miro.medium.com/v2/resize:fit:1400/0*dKfEjPBeZnlX3rZa' },
  { name: 'product 3', image: 'https://www.shutterstock.com/image-illustration/3d-variety-home-appliances-concept-600nw-2048419898.jpg' },
  { name: 'product 4', image:'https://images.meesho.com/images/products/281909249/b84uh_512.webp' },
].map((product,index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition relative">
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                     <button
                 onClick={() => {
                  setLikedProducts([...likedProducts, product]);
                }}
                className="absolute   rounded-full hover:bg-gray-200 p-2  top-3 right-2  w-10 h-9"
                aria-label="Wishlist"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill={likedProducts[index] ? "red" : "currentColor"}
                    className="bi bi-heart w-6 h-6"
                    viewBox="0 0 16 16"
                >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
                <span className="absolute  text-white rounded-full text-xs px-2 py-1">
                   
                </span>
            </button>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Product {product.name}</h3>
                  <p className="text-gray-600 mt-2">$49.99</p>
                  <button     onClick={()=>{
                 setCarditems ([...carditems,product])
                }} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-600 italic mb-4">"This is the best store ever! Highly recommended."</p>
                <h4 className="font-bold text-lg">Customer {testimonial}</h4>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-16 bg-orange-200 text-black">
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
            <button className="bg-gray-800  text-white px-6 py-2 rounded-r-lg hover:bg-gray-100 transition duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default HomePage;