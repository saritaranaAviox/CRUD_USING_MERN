import { useForm } from "react-hook-form";
import React from 'react'
import { login } from '../api/apiFunctions'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { encrypt } from "../utils/crypto";
const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await login(data);

            const token = response.data.token;
            const encryptedToken=encrypt(token);

            localStorage.setItem("access_token", encryptedToken);

            navigate('/dashboard');
        }
        catch(error)
        {
            console.log("login failed",error)
        }

    }
    return (
        <div >
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Enter email"
                    {...register("email", {
                        required: "email is required",
                        pattern: {
                            value: "/^\S+@\S+$/i",
                            message: "Invalid email format"
                        }
                    })}
                /><br></br>
                {errors.email && <p>{errors.email.message}</p>}

                <input
                placeholder="Enter password"
                    {...register("password", {
                        required: "Passowrd is required",

                    })}
                /><br></br>
                {errors.password && <p>{errors.password.message}</p>}

                <button type='submit'>{isSubmitting ? "Logging in..." : "Log in "}</button>

                <p>Donot have an account?</p>
                <NavLink to="/signup">
                    Sign Up 
                </NavLink>
            </form>
        </div>
    )
}

export default Login
