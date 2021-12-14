export interface Restaurant {
  //llenar con mis datos
  address: Address;
  id: number;
  name: string;
  phone_number: string;
  schedule_close: string;
  schedule_open: string;
  description: string;
  image_url: string;  
  token?: string;
  refreshToken?: string;
}

export interface Address {
  //llenar con mis datos
  city: string;
  id: number;
  postal_abbr: string;
  street: string;
  zipcode: string;
  latitude: string;
  longitude: string;
}

export interface Products{
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}
