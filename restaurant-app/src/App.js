import React from 'react';
import './App.css';

function App() {

  // Fetch data from the local restaurants.json-file.
  var jsonData = require('./restaurants.json');

  var restaurants = [];

  // Loop trough the JSON-Array and 
  for (var i = 0; i < jsonData.restaurants.length; i++) {
    var restaurant = jsonData.restaurants[i];
    restaurants.push(restaurant)
  }

  return (
    <div className="App">
      <>
        {restaurants.map(restaurant => (
          <div className="restaurant" key={restaurant.name}>{restaurant.name}</div>
        ))}
      </>
    </div>
  );
}

export default App;
