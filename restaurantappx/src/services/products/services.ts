import { Products } from "../../models/restaurants/types";
import { authorizationFetch } from "../../utils/request/auth";

export const fetchProducts = async (): Promise<Products[]> => {
  const response = await fetch(
    "http://104.237.129.63:8013/api/products/product",
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const Restaurants: Products[] = await response.json();

    return Restaurants;
  } else {
    throw new Error("Error en solicitud de products");
  }
};
