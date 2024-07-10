import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/DrinksList.css';

const DrinksList = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:7056/Drink/GetDrinks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDrinks(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleRemove = (id) => {
    fetch(`https://localhost:7056/Drink/DeleteDrink?id=${id}`, { 
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setDrinks(drinks.filter(drink => drink.id !== id));
    })
    .catch(error => {
      setError(error);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>DRINKS LIST</h1>
      <button onClick={() => navigate('/add_drink')}>Add New Drink</button>
      <ul>
        {drinks.map(drink => (
          <li key={drink.id}>
            <div>
              <strong>{drink.name}</strong> {drink.description} - ${drink.price}
            </div>
            <div className="button-group">
              <button type="button" onClick={() => handleRemove(drink.id)}>Delete</button>
              <button type="button" onClick={() => navigate(`edit_drink/${drink.id}`)}>Edit</button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinksList;
