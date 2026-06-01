import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';

const FlooringTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get('/types').then(res => setTypes(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Flooring Type</h1>
      <ul className="space-y-2">
        {types.map(type => (
          <li key={type.id}>
            <Link
              to={`/suppliers/${type.id}`}
              className="block bg-white p-4 rounded shadow hover:bg-blue-50"
            >
              {type.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlooringTypes;