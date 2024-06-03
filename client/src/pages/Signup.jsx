import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { NavLink, Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

export default function Signup() {
  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {

 
    console.log(data);

  }
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Username" {...register} />
      <input type="new-password" placeholder="Password" name="Password"{...register("Password", {required: true, min: 12, maxLength: 25})} />
      <input type="new-password" placeholder="RepeatPassword" {...register("RepeatPassword", {required: true, min: 12, maxLength: 25})} />

      <input type="submit" />
    </form>

    </>
  );
}
