import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP");

    const { data: services, isLoading, refetch } = useQuery(
        ["available", formattedDate],
        () =>
            fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
                (res) => res.json()
            )
    );
    if(isLoading){
        return <Loading/>
    }

    return (
        <div className="my-12">
            <div className="text-center my-6">
                <h4 className="text-xl text-secondary mb-4">
                    Available Appointment on {format(date, "PP")}
                </h4>
                <p>Please select a service.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                {services?.map((service) => (
                    <Service
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    />
                ))}
            </div>
            {treatment && (
                <BookingModal
                    date={date}
                    treatment={treatment}
                    refetch={refetch}
                    setTreatment={setTreatment}
                />
            )}
        </div>
    );
};

export default AvailableAppointment;