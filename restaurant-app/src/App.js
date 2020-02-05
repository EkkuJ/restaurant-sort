import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Restaurants from './components/Restaurants';

function App() {

  // Fetch data from the local restaurants.json-file.
  var jsonData = require('./restaurants.json');

  var restaurants = [];

  // Loop trough the JSON-Array and add them into the js-array.
  for (var i = 0; i < jsonData.restaurants.length; i++) {
    var restaurant = jsonData.restaurants[i];
    restaurants.push(restaurant)
  };

  // The initial Restaurants-element based on the order in the JSON-file
  const initialElement = <Restaurants restaurants={restaurants} />

  // The state that contains the Restaurants-element in the wanted order (initial, A-Z or Z-A).
  const [element, setElement] = useState(initialElement)

  /**
   * Create the A-Z and Z-A elements once and store them in ref-containers.
   * The effect runs after the initial render.
  */
  const refAZ = useRef(initialElement)
  const refZA = useRef(initialElement)
  useEffect(() => {
    function sortRestaurants() {
      const restaurantsAZ = restaurants.slice().sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      const restaurantsZA = restaurants.slice().sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
      refAZ.current = <Restaurants restaurants={restaurantsAZ} />
      refZA.current = <Restaurants restaurants={restaurantsZA} />
    }
    sortRestaurants()
  }, [restaurants])

  // Functions for handling sort-button clicks.
  function handleSortZA() {
    setElement(refZA.current)
  }
  function handleSortAZ() {
    setElement(refAZ.current)
  }

  return (
    <div className="App" >
      <header>
        <h1 className="title">Restaurants</h1>
        {(element === initialElement || element === refZA.current) ?
          <button className="sortbtn" onClick={handleSortAZ}>Sort Ascending</button> :
          <button className="sortbtn" onClick={handleSortZA}>Sort Descending </button>
        }
      </header>
      <div className="restataurantsContainer">
        {element}
      </div>
    </div>
  );
}

export default App;
