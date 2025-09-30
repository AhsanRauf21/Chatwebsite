import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { axiosClient } from "../utils/axiosClient";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/maincontext";

const Register = () => {

const {fetchUsers,setUser} = useMainContext()


  const onSubmitHandler = async (values, { resetForm }) => {
    try {
      const res = await axiosClient.post("/register", values,{withCredentials:true});
 localStorage.setItem('user', JSON.stringify( res.data.userData))
      setUser(res.data)
await fetchUsers()
      resetForm();
    } catch (error) {
      console.log(error?.response?.data?.message || error.message);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
          Create Account
        </h2>

        <Formik
          onSubmit={onSubmitHandler}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form className="flex flex-col gap-4">
            {/* Username */}
            <div>
              <Field
                name="username"
                type="text"
                placeholder="Username"
                className="w-full p-2 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2 bg-gray-600 hover:bg-gray-500 text-gray-100 font-semibold rounded transition"
            >
              Register
            </button>
          </Form>
        </Formik>
    <span className="block mt-4 text-center">
  <p className="text-gray-300">
    Already have an account?{" "}
    <Link
      to="/login"
      className="text-blue-400 hover:text-blue-300 font-semibold transition"
    >
      Login
    </Link>
  </p>
</span>

      </div>
    </div>
  );
};

export default Register;
