import { FC, useEffect, useState } from "react";
import Input from "../../components/Input/component";
import { useDispatch } from "react-redux";
import { Address, Restaurant } from "../../models/restaurants/types";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchRestaurants } from "../../services/restaurants/services";

import "./styles.css";

const Locations: FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [actualLocation, setActualLocation] = useState<string>(
    "33.8178867927656,-117.90826558092522"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        dispatch(pushLoading());
        const receivedRestaurants = await fetchRestaurants();
        setRestaurants(receivedRestaurants);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        dispatch(popLoading());
      }
    };
    if (restaurants === null) {
      getRestaurants();
    }
  }, [dispatch, restaurants]);

  const changeLocation = (requestedLocation: Address) => {
    setActualLocation(
      `${requestedLocation.latitude},${requestedLocation.longitude}`
    );
  };

  return (
    <div className="locations-container">
      <div className="locations-top">
        <p className="locations-title">OUR LOCATIONS</p>
        <p className="locations-description">
          This is your burger locator. Use it to find burgers near you. Or
          chicken sandwiches, or milkshakes, or whatever else you’d like from
          Burger King. Pull up restaurant hours, local menus, which spots offer
          catering and more.
        </p>
      </div>
      <div className="locations-zipcode">
        <Input
          type="number"
          className="locations-zipcode-entry"
          placeholder="zipcode"
        />
      </div>
      <div className="locations-map">
        <div
          className="locations-restaurant-info"
          id="id-locations-restaurant-info"
        >
          {restaurants?.map((restaurant, index) => (
            <div
              key={`restaurant-location-button-${restaurant.id}`}
              className="locations-restaurant-detail"
              onClick={() => changeLocation(restaurant.address)}
              id={`location-${index}`}
            >
              <MdLocationOn className="locations-svg" />
              <p className="locations-address-text" id={`location-address-text-${index}`}>
                {`${restaurant.address.street} ${restaurant.address.city} 
              ${restaurant.address.postal_abbr} ${restaurant.address.zipcode}`}
                <br />
                {restaurant.phone_number}
              </p>
              <Link
                to={`edit/${index}/${restaurant.name}/${restaurant.description}/${restaurant.phone_number}/${restaurant.schedule_open}/${restaurant.schedule_close}`}
              >
                <p className="locations-detail-text clickable">view details</p>
              </Link>
            </div>
          ))}
        </div>
        <iframe
          title="restaurantLocationsMaps"
          src={`https://maps.google.com/maps?q=${actualLocation}&z=15&output=embed`}
          className="map-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Locations;
