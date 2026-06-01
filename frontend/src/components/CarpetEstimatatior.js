import { useState } from 'react';
import axios from 'axios';

export default function CarpetEstimator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [carpetType, setCarpetType] = useState('');
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/estimation', {
        length: parseFloat(length),
        width: parseFloat(width),
        carpetType,
      });
      setEstimate(res.data);
    } catch (error) {
      alert('Estimation failed');
    }
  };

  return (
    <form onSubmit={handleEstimate} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Carpet Estimator</h2>
      <input
        type="number"
        placeholder="Length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Carpet Type"
        value={carpetType}
        onChange={(e) => setCarpetType(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600">Estimate</button>

      {estimate && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">Estimate</h3>
          <p>Carpet Needed: {estimate.carpetNeeded} sq ft</p>
          <p>Estimated Cost: ${estimate.cost.toFixed(2)}</p>
        </div>
      )}
    </form>
  );
}
