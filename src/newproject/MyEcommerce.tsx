import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const MyEcommerce: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/config.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="text-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <div>My E-Commerce</div>
          </div>

          {/* Dynamic Categories */}
          <ul className="flex space-x-6">
            {loading ? (
              <li>Loading categories...</li>
            ) : categories.length > 0 ? (
              categories.map((category) => (
                <li key={category.id}>
                  <Link
                    className="hover:text-yellow-400 transition duration-300"
                    to={`/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>No categories found</li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MyEcommerce;

