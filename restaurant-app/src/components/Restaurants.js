import React from 'react';
import Restaurant from './Restaurant';


/**
 * Component representing the whole list of restaurants. Can be called with different orderings
 * of restaurants. 
 *
 *  @param {*} props Attribute restaurants contains the array of restaurants to be returned.
 */
function Restaurants(props) {

  const restaurants = props.restaurants

  const restaurantMap = restaurants.map(restaurant => (
    <Restaurant className="restaurant"
      key={restaurant.name}
      name={restaurant.name}
      image={restaurant.image}
      hash={restaurant.blurhash}
      description={restaurant.description}
      city={restaurant.city}
    />
  ))
  return (
  <div className="orderedRestaurants">
    {restaurantMap}
  </div>
  );
}

export default Restaurants;