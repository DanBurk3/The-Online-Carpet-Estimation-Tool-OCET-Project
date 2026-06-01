import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <div className="font-bold text-xl">OCET</div>
      <div className="space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        <Link to="/carpet-estimator" className="text-blue-600 hover:underline">Estimator</Link>
        <Link to="/saved-estimations" className="text-blue-600 hover:underline">Saved</Link>
        <Link to="/products" className="text-blue-600 hover:underline">Products</Link>
      </div>
    </nav>
  );
}
