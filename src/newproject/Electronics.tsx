import React from "react";
import { likedProductsAtom, carditemsAtom } from '../newproject/Jotai';
import { useAtom } from "jotai";


interface Category {
  name: string;
  products: { id: number; image: string; name: string; price: string }[];
}

interface ElectronicsProps {
  categories: Category[];
}

const Electronics: React.FC<ElectronicsProps> = ({ categories }) => {
     const [likedProducts, setLikedProducts] = useAtom(likedProductsAtom);
          const [carditems,setCarditems] = useAtom(carditemsAtom);
          
  const electronics = categories.find(
    (category: { name: string; }) => category.name === "Electronics"
  );
  return (
    <div>
      <section id="electronics" className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Electronics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {electronics?.products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
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
                    fill={likedProducts[product.id] ? "red" : "currentColor"}
                    className="bi bi-heart w-6 h-6"
                    viewBox="0 0 16 16"
                >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
                <span className="absolute  text-white rounded-full text-xs px-2 py-1">
                   
                </span>
            </button>
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-lg text-gray-700 mt-2">{product.price}</p>
              <button onClick={() => {
                  setCarditems([...carditems, product]);
                }} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Electronics;