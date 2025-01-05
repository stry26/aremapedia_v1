import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TiketPage from './pages/tiketpage';
import Store from './pages/storepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tiket" element={<TiketPage />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
};

export default App;
