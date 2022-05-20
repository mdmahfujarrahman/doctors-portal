import React from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle, useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase/firebase.init";
import Loading from "../../Shared/Loading";


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [updateProfile, updating, uError] = useUpdateProfile(auth, {
        sendEmailVerification: true,
    });
    const navigate = useNavigate()

    let signInError;

    if (error || gError || uError) {
        signInError = (
            <p className="text-red-500 text-center">
                <small>{error?.message || gError?.message || uError?.message}</small>
            </p>
        );
    }

    if (loading || gLoading || updating) {
        return <Loading />;
    }

    if (user || gUser) {
        
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate("/appointment");
    };

    return (
        <section className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required",
                                    }
                                })}
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.name?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>
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
                                <span className="label-text">Password</span>
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
                            value="Sign Up"
                        />
                    </form>
                    <p>
                        Already have a account? 
                        <Link className="text-secondary" to="/login">
                             Log in
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

export default SignUp;