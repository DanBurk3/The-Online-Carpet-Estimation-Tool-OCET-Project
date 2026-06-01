import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../axios';

const Suppliers = () => {
  const { typeId } = useParams();
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get(`/suppliers/${typeId}`).then(res => setSuppliers(res.data));
  }, [typeId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Supplier</h1>
      <ul className="space-y-2">
        {suppliers.map(supplier => (
          <li key={supplier.id}>
            <Link
              to={`/ranges/${typeId}/${supplier.id}`}
              className="block bg-white p-4 rounded shadow hover:bg-green-50"
            >
              {supplier.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suppliers;