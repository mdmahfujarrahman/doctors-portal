import React, { useEffect } from "react";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase/firebase.init";
import Loading from "../../Shared/Loading";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            console.log(user);
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate]);
    let signInError;

    if (error || gError) {
        signInError = (
            <p className="text-red-500 text-center">
                <small>{error?.message || gError?.message}</small>
            </p>
        );
    }

    if (loading || gLoading) {
        return <Loading/>
    }

    
    

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <section className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
                                        message: "Provide a valid email",
                                    },
                                })}
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                            <label className="label">
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pasword</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Must be 6 Characters or Longer",
                                    },
                                })}
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                            <label className="label">
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {signInError}
                        <input
                            className="btn w-full max-w-xs text-white"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <p>
                        New to Doctors Portal?{" "}
                        <Link className="text-secondary" to="/signup">
                            Create new account
                        </Link>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;
