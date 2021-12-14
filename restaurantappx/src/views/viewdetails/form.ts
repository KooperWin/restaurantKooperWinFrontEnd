import * as yup from "yup";
import { Restaurant } from "../../models/restaurants/types";

export interface formValues {
  description?: string;
  id: number;
  image_url?: string;
  name?: string;
  phone_number?: string;
  schedule_close?: string;
  schedule_open?: string;
}

export const initialValues: formValues = {
  description: "",
  id: 1,
  image_url: "",
  name: "",
  phone_number: "",
  schedule_close: "",
  schedule_open: "",
};

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
  description: yup.string().required(),
  id: yup.number().required("El id es un campo requerido").required(),
  image_url: yup.string().required(),
  name: yup.string().required(),
  phone_number: yup.string().required(),
  schedule_close: yup.string().required(),
  schedule_open: yup.string().required(),
});

export const onSubmit = (
  values: formValues,
  update: (restaurant: Partial<Restaurant>) => void
) => {
  const possibleRestaurant: Partial<Restaurant> = {
    description: values.description,
    id: values.id,
    image_url: values.image_url,
    name: values.name,
    phone_number: values.phone_number,
    schedule_close: values.schedule_close,
    schedule_open: values.schedule_open,
  };

  update(possibleRestaurant);
};
