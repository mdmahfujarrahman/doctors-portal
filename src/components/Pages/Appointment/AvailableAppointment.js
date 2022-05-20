import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/service")
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div className="my-12">
            <div className="text-center my-6">
                <h4 className="text-xl text-secondary mb-4">Available Appointment on {format(date, 'PP')}</h4>
                <p>Please select a service.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                {services.map(service => <Service key={service._id} setTreatment={setTreatment} service={service}/>)}
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            />}
        </div>
    );
};

export default AvailableAppointment;