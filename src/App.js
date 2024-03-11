import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/MainPage/form';
import Cards from './components/ProductsPage/cards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/ProductsPage/cards" element={<cards />} />
      </Routes>
    </Router>
  );
}

export default App;
