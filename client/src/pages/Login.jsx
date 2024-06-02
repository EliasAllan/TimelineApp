import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations.js';
import Auth from '../utils/auth.js';

export default function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true, min: 12, maxLength: 25 })}
        />

        <input type="submit" />
      </form>
      <Link to="/signup" className="navbar-items">
        Signup
      </Link>
    </>
  );
}
