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
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5173/api/users/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log(result);
  
      if (response.ok) {
        // Handle successful user creation (e.g., redirect or display a message)
        console.log('User created successfully');
      } else {
        // Handle errors (e.g., display error messages)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(data);
  }
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
