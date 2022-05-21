import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import auth from '../../../firebase/firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, "PP");

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email,
            phone: e.target.phone.value,
        };

        console.log(booking);
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success(
                        `Your appointment has been set on ${format(
                            date,
                            "PP"
                        )} at ${slot}`,
                        {
                            toastId: "success1",
                        }
                    );
                } else {
                    toast.error(
                        `Already have appointment on ${data.booking?.date} at ${data.booking?.slot}`,
                        {
                            toastId: "error1",
                        }
                    );
                }
                refetch()
                setTreatment(null);
            });
    };

    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        for="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="font-bold text-lg text-center mb-2">
                        {name}
                    </h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 justify-items-center"
                    >
                        <input
                            type="text"
                            disabled
                            value={format(date, "PP")}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            disabled
                            value={user?.displayName || ""}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="email"
                            disabled
                            value={user?.email || ""}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="submit"
                            className="btn btn-secondary w-full max-w-xs uppercase"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;