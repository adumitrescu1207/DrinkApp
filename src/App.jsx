import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './routes/root';
import AddDrink from './routes/AddDrink';
import EditDrink from './routes/EditDrink';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/add_drinks" element={<AddDrink />} />
        <Route path="/edit_drink/:id" element={<EditDrink />} />
      </Routes>
    </Router>
  );
}

export default App;
