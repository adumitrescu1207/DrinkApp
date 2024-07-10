import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './routes/root';
import AddDrink from './routes/AddDrink';
import EditDrink from './routes/EditDrink';
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/add_drink" element={<AddDrink />} />
            <Route path="/edit_drink/:id" element={<EditDrink />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
