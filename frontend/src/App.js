import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CarpetEstimator from './components/CarpetEstimator';
import SavedEstimations from './components/SavedEstimations';
import Products from './components/ProductList';

//Components for Flooring Navigation
import FlooringTypes from './components/FlooringTypes';
import Suppliers from './components/Suppliers';
import Ranges from './components/Ranges';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carpet-estimator" element={<CarpetEstimator />} />
          <Route path="/saved-estimations" element={<SavedEstimations />} />
          <Route path="/products" element={<Products />} />

          <Route path="/flooring-types" element={<FlooringTypes />} />
          <Route path="/suppliers/:typeId" element={<Suppliers />} />
          <Route path="/ranges/:typeId/:supplierId" element={<Ranges />} />
          <Route path="/products/:rangeId" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
