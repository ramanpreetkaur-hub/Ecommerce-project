import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const Products = () => {
  const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {
    fetch('/config.json')
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Categories</h1>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product: { id: React.Key | null | undefined; image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; stock: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {product.description}
                  </p>
                  <p className="font-semibold text-blue-600">${product.price}</p>
                  <p className="text-gray-400 text-sm">Stock: {product.stock}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
};

export default Products;

