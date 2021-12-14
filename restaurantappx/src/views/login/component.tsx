import { FC } from "react";
import { useDispatch } from "react-redux";
import images from "../../assets";
import Input from "../../components/Input/component";
import { useFormik } from "formik";
import { useShowError } from "../../utils/ui/stringError";
import { loginRequested, signinRequested } from "../../redux/user/actions";
import { User } from "../../models/user/types";
import { initialValues, onSubmit, validationSchema } from "./form";
import "./styles.css";
//lo que detona el loader es sagas
//A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
const Login: FC = () => {
  const { BurgerLogo } = images;

  const dispatch = useDispatch();

  const passUser = (user: Partial<User>) => {
    dispatch(loginRequested(user));
  };

  const signUser = (user: Partial<User>) => {
    dispatch(signinRequested(user));
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values, passUser, signUser),
    validationSchema,
  });

  

  const errors = useShowError(formik.touched, formik.errors);

  return (
    <div className="login-container">
      <div className="login-form">
        <BurgerLogo className="title-image" />
        
        <Input
          name="username"
          className="login-inputs"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          ErrorComponent={errors("username")}
        />
        <Input
          name="email"
          className="login-inputs"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          ErrorComponent={errors("email")}
        />
        <Input
          name="password"
          className="login-inputs"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          ErrorComponent={errors("password")}
        />
        <label>
          Are you new around here?
          <input
            type="checkbox"
            className="checkbox-register"
            name="register"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.register}
          />
        </label>
        <button
          type="button"
          className="button-black"
          onClick={() => formik.handleSubmit()}
        >
          Enter
        </button>
        
      </div>
    </div>
  );
};

export default Login;
