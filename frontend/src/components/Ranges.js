import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../axios';

const Ranges = () => {
  const { typeId, supplierId } = useParams();
  const [ranges, setRanges] = useState([]);

  useEffect(() => {
    axios.get(`/ranges/${typeId}/${supplierId}`).then(res => setRanges(res.data));
  }, [typeId, supplierId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Range</h1>
      <ul className="space-y-2">
        {ranges.map(range => (
          <li key={range.id}>
            <Link
              to={`/products/${range.id}`}
              className="block bg-white p-4 rounded shadow hover:bg-yellow-50"
            >
              {range.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranges;
