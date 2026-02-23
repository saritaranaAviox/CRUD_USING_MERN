import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import {signup } from '../api/apiFunctions';
import { Navigate } from 'react-router-dom';
const Signup = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await signup(data);
            console.log("signup successfully", response.data)
            alert("sign up successful")
            Navigate('/login')
        }
        catch (error) {
            console.error("Signup failed:", error.response?.data || error.message);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1>SIGN UP</h1>


                <input
                    type="text"
                    placeholder="Enter Name"
                    {...register("name", {
                        required: "Name is required",
                    })}
                /><br></br>
                {errors.name && <p>{errors.name.message}</p>}


                <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email format",
                        },
                    })}
                /><br></br>
                {errors.email && <p>{errors.email.message}</p>}


                <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters required",
                        },
                    })}
                /><br></br>
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Signup"}
                </button>

                <p>
                    Already have an account?{" "}
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </p>

            </form>
        </div>
    )
}

export default Signup
