import React from "react";
import { useParams } from "react-router-dom";
import { useShowError } from "../../utils/ui/stringError";
import Input from "../../components/Input/component";
import { initialValues, onSubmit, validationSchema } from "./form";
import { Formik, useFormik } from "formik";
import "./styles.css";
import { useDispatch } from "react-redux";
import { Restaurant } from "../../models/restaurants/types";
import { registerRequested } from "../../redux/user/actions";

const ViewDetails = () => {
  const dispatch = useDispatch();

  const passRestaurant = (restaurant: Partial<Restaurant>) => {
    dispatch(registerRequested(restaurant));
  };

  const params = useParams();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values, passRestaurant),
    validationSchema,
  });

  const errors = useShowError(formik.touched, formik.errors);

  return (
    <div className="viewDetails-container">
      <div className="viewDetails-locationID">
        <h1>Editing Location ID: {params.id}</h1>
        <div className="viewDetails-inputZone">
          <p className="viewDetails-tags">Name:</p>
          <label className="viewDetails-label">Actual name: {params.name}</label>
          <Input
            name="name"
            className="viewDetails-inputs"
            placeholder={params.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            ErrorComponent={errors("name")}
          />

          <p className="viewDetails-tags">Description:</p>
          <label className="viewDetails-label">Actual description: {params.description}</label>
          <Input
            name="description"
            className="viewDetails-inputs"
            placeholder={params.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            ErrorComponent={errors("description")}
          />
          <p className="viewDetails-tags">Phone Number:</p>
          <label className="viewDetails-label">Actual number: {params.phone_number}</label>
          <Input
            name="phone_number"
            className="viewDetails-inputs"
            placeholder={params.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
            ErrorComponent={errors("phone_number")}
          />
          <p className="viewDetails-tags">Open Hour:</p>
          <label className="viewDetails-label">Actual hour: {params.schedule_open}</label>
          <Input
            name="schedule_open"
            className="viewDetails-inputs"
            placeholder={params.schedule_open}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.schedule_open}
            ErrorComponent={errors("schedule_open")}
          />
          <p className="viewDetails-tags">Closing Hour:</p>
          <label className="viewDetails-label">Actual hour: {params.schedule_close}</label>
          <Input
            name="schedule_close"
            className="viewDetails-inputs"
            placeholder={params.schedule_close}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.schedule_close}
            ErrorComponent={errors("schedule_close")}
          />
        </div>
        <button
          type="button"
          className="button-black butonsito"
          onClick={() => formik.handleSubmit()}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
