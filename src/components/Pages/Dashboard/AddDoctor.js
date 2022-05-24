import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';


const AddDoctor = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();
    const imageStorageKey = "791d85f9a6f04ce3865f145c7fda4ff3";

    const { data: services, isLoading } = useQuery("services", () =>
        fetch("http://localhost:5000/service").then((res) => res.json())
    );



    const onSubmit = (data) => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
        .then(res  => res.json())
        .then(result => {
            if(result.success) {
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img,
                }



                fetch("http://localhost:5000/doctor", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        'authorization': `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                    body: JSON.stringify(doctor),
                })
                    .then((res) => res.json())
                    .then((inserted) => {
                        if (inserted.insertedId) {
                            toast.success("Doctor added successfully");
                            reset();
                        } else {
                            toast.error("Failed to add the doctor");
                        }
                    });

            }
            
        })
    };



    if(isLoading) {
        return <Loading/>
    }


    
    return (
        <div>
            <h2 cla>Add new doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required",
                            },
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
                <div className="form-control mx-auto w-full max-w-xs">
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
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register("specialty")}
                        className="select input-bordered w-full max-w-xs"
                    >
                        {" "}
                        {services.map((s) => (
                            <option key={s._id}>{s.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register("image", {
                            required: {
                                value: true,
                                message: "image is required",
                            },
                        })}
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.image?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.image.message}
                            </span>
                        )}
                    </label>
                </div>
                <input
                    className="btn mt-4 w-full max-w-xs text-white"
                    type="submit"
                    value="Add a Doctor"
                />
            </form>
        </div>
    );
};

export default AddDoctor;