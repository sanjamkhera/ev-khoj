import React from 'react';

// Assume you have a type for your product data
type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  // ... other relevant fields
};

// Mock data array, in a real app this could come from your state management or API call
const products: Product[] = [
  // ... array of product objects
];

const ProductPage: React.FC = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <section>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            {/* More product details */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
