import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import RegisterVendor from './components/RegisterVendor';

const App = () => {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h2>Multi-Register Page</h2>
        <nav>
          <Link to="/register-user" style={{ marginRight: 10 }}>User Register</Link>
          <Link to="/register-vendor">Vendor Register</Link>
        </nav>

        <Routes>
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-vendor" element={<RegisterVendor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
