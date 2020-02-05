import React from 'react';
import './App.css';
import Restaurant from './components/Restaurant';

function App() {

  // Fetch data from the local restaurants.json-file.
  var jsonData = require('./restaurants.json');

  var restaurants = [];

  // Loop trough the JSON-Array and add them into the js-array.
  for (var i = 0; i < jsonData.restaurants.length; i++) {
    var restaurant = jsonData.restaurants[i];
    restaurants.push(restaurant)
  };

  return (
    <div className="App" >
      <>
        {restaurants.map(restaurant => (
          <Restaurant className="restaurant"
          key={restaurant.name} 
          name={restaurant.name}
          image={restaurant.image}
          hash={restaurant.blurhash}
          description={restaurant.description}
          city={restaurant.city}
          />
        ))}
      </>
    </div>
  );
}

export default App;
