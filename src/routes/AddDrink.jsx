import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddDrink.css';
import Header from '../Header';
import Footer from '../Footer';

const AddDrink = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (name.length > 25) errors.name = 'Name length cannot exceed 25 characters';
    if (description.length > 100) errors.description = 'Description length cannot exceed 100 characters';
    if (!price || price <= 0) errors.price = 'Price must be a positive number';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('https://localhost:7056/Drink/PostDrinks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price: parseFloat(price) }),
      });
      if (response.ok) {
        navigate('/');
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.message });
      }
    } catch (error) {
      setErrors({ general: error.message });
    }
  };

  return (
    <>
      <div><Header/></div>
      <div className="container">
        <h2>Add New Drink</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
           />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
           <label>Description: </label>
           <input
             type="text"
             value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
           {errors.description && <div className="error">{errors.description}</div>}
          </div>
         <div>
           <label>Price: </label>
           <input
              type="number"
              value={price}
             onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <div className="error">{errors.price}</div>}
          </div>
          {errors.general && <div className="error">{errors.general}</div>}
          <button type="submit">Add Drink</button>
        </form>
      </div>
      <div><Footer/></div>
    </>
  );
};

export default AddDrink;
