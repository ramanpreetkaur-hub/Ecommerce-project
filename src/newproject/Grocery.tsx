import React, { useState } from "react";
import { likedProductsAtom, carditemsAtom } from "../newproject/Jotai";
import { useAtom } from "jotai";

interface Product {
  id: React.Key;
  image: string;
  name: string;
  price: string | number;
}

const Grocery = ({ categories }: { categories: { name: string; products: Product[] }[] }) => {
  const [filter, setFilter] = useState("");
  const [likedProducts, setLikedProducts] = useAtom(likedProductsAtom);
  const [carditems, setCarditems] = useAtom(carditemsAtom);

  const groceryCategory =
    categories?.find((category) => category.name.toLowerCase() === "grocery") || {};
  const products = groceryCategory.products || [];

  console.log("Grocery Category:", groceryCategory);
  console.log("Products:", products);

  const handleLike = (productId: React.Key) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId],
    }));
  };

  const handleAddToCart = (product: Product) => {
    if (!carditems.find((item) => item.id === product.id)) {
      setCarditems([...carditems, product]);
    }
  };

  return (
    <div>
      <section id="Grocery" className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Grocery</h2>

        <input
          type="text"
          placeholder="Filter grocery items"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))
            .length > 0 ? ( 
            products
              .filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))
              .map((product) => (
                <div key={product.id} className="relative bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={product.image }
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <button
                    onClick={() => handleLike(product.id)}
                    className="absolute top-2 right-2"
                    aria-label="Toggle Wishlist"
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
                  </button>
                  <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                  <p className="text-lg text-gray-700 mt-2">{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No grocery items available.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Grocery;

