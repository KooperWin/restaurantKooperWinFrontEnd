import { Restaurant } from "../../models/restaurants/types";
import { authorizationFetch } from "../../utils/request/auth";

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(
    "http://104.237.129.63:8013/api/ristorante/",
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const Restaurants: Restaurant[] = await response.json();
    
    return Restaurants;
  } else {
    throw new Error("Error en solicitud de restaurant");
  }
};

export const update = async (
  basicRestaurant: Partial<Restaurant>
): Promise<Partial<Restaurant>> => {
  const response = await fetch(
    "http://104.237.129.63:8013/api/ristorante",
    {
      headers: {
        "content-type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(basicRestaurant),
    }
  );

  if (basicRestaurant.id && basicRestaurant.name && response.status === 200) {
    const tokens: { access: string; refresh: string } = await response.json();

    const logRestaurant: Partial<Restaurant> = {
      id: basicRestaurant.id,
      name: basicRestaurant.name,
      description: basicRestaurant.description,
      phone_number:basicRestaurant.phone_number,
      schedule_open: basicRestaurant.schedule_open,
      schedule_close: basicRestaurant.schedule_close,
      token: tokens.access,
      refreshToken: tokens.refresh,
    };

    return logRestaurant;
  } else {
    throw new Error("Escribe bien toda la informacion");
  }
};
