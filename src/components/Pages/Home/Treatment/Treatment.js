import React from 'react';
import treatment from '../../../../img/images/treatment.png';
import PrimaryButton from '../../Shared/PrimaryButton';


const Treatment = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row p-0 mb-16 lg:mb-0">
                <img src={treatment} alt="treatment" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="md:ml-16">
                <h1 className="text-5xl font-bold uppercase">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;