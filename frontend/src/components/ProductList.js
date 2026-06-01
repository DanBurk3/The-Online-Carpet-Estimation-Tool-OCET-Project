import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

const Products = () => {
  const { rangeId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/products/${rangeId}`).then(res => setProducts(res.data));
  }, [rangeId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products in Range</h1>
      <div className="grid grid-cols-1 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p><strong>Code:</strong> {product.supplier_id_code}</p>
            <p><strong>Price:</strong> £{product.price_per_sq_m} / m²</p>
            <p><strong>Suitable for:</strong> {product.suitability}</p>
            <p><strong>Widths:</strong> {product.available_widths}</p>
            <p className="text-gray-600 mt-2">{product.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
