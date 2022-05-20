import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {name, slots} = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value

        const phone = e.target.phone.value
        const email = e.target.email.value
        console.log(slot, name , phone);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg text-center mb-2">{name}</h3>
                        <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center">
                            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                            <select name="slot" className="select select-bordered w-full max-w-xs">
                                {slots.map(slot => <option value={slot}>{slot}</option>)}
                            </select>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                            <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs uppercase" />
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default BookingModal;