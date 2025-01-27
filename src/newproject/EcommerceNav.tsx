import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { likedProductsAtom, carditemsAtom } from '../newproject/Jotai';
import Nav from './Nav'; 
import { useUser } from '@clerk/clerk-react';

const EcommerceNav = () => {
  const [likedProducts] = useAtom(likedProductsAtom);
  const [carditems] = useAtom(carditemsAtom);
  const [isOpen, setIsOpen] = useState(false);

  const user = useUser();
  console.log(user);

  return (
    <div>
      {/* First Navbar */}
      <div className="flex justify-between px-7 py-3 text-white items-center font-bold font-roboto bg-gray-700">
        <h1>Contact Number</h1>
        <div className="flex gap-24 pr-20 items-center">
          <Link className="hover:text-orange-400 transition duration-300" to="/Home">
            Home
          </Link>
          <Link className="hover:text-orange-400" to={'/services'}>Services</Link>
          <Link className="hover:text-orange-400" to={'/products'}>Products</Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:text-orange-400"
          >
            Contact Us
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-md rounded-md w-64">
          <ul className="p-4 space-y-2 z-50">
            <li>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                📞 Call Us: +8284081809
              </a>
            </li>
            <li>
              <a
                href="mailto:support@example.com"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                📧 Email: Ecommerce@gmail.com
              </a>
            </li>
            <li>
              <a
                href="/live-chat"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                💬 Live Chat
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                ❓ FAQs
              </a>
            </li>
            <li>
              <a
                href="/order-tracking"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                📦 Track Order
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Second Navbar */}
      <div className="flex justify-between items-center px-7 py-2 bg-orange-300 hover:bg-white">
        <div className="flex items-center">Logo</div>
        <div className="relative flex items-center">
          <input
            id="search"
            name="search"
            placeholder="Search here"
            type="text"
            className="rounded-md border border-orange-200 hover:border-black bg-white py-3 px-6 w-96 text-base font-medium text-black outline-none focus:border-black focus:shadow-xl"
            aria-label="Search input"
          />
          <button
            className="absolute right-2 top-2 text-white bg-orange-400 rounded-md p-2 hover:bg-orange-500"
            aria-label="Search"
          >
            🔍
          </button>
        </div>
        <div className="flex items-center gap-2 ">
          {/* Cart Button */}
          <button className="relative rounded-full hover:bg-gray-100 p-2" aria-label="Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart-dash-fill w-10"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
              {carditems.length}
            </span>
          </button>

          {/* Wishlist Button */}
          <button className="relative rounded-full hover:bg-gray-100 p-2" aria-label="Wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart w-10"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
              {likedProducts.length}
            </span>
          </button>
        </div>
        {/* Nav Component */}
        <Nav />
      </div>
    </div>
  );
};

export default EcommerceNav;
