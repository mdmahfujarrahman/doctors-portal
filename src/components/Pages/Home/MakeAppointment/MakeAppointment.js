import React from 'react';
import doctor from '../../../../img/images/doctor.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="flex bg-appointment-bg justify-center items-center ">
            <div className="flex-1 hidden lg:block"> 
                <img className="mt-[-200px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 mx-auto">
                <h3 className="text-xl text-primary font-bold my-5">Appointment</h3>
                <h2 className="text-3xl text-white my-5">Make an appointment Today</h2>
                <p className="text-white my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <div className="my-5"><PrimaryButton>Make an Appointment</PrimaryButton></div>
            </div>
        </section>
    );
};

export default MakeAppointment;