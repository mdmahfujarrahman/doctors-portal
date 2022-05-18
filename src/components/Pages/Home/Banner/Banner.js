import React from 'react';
import Chair from '../../../../../src/img/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton';
 
const Banner = () => {
    return (
        <section className="container mx-auto">
            <div className="hero min-h-screen w-full lg:bg-hero-bg">
                    <div className="hero-content flex-col lg:flex-row-reverse p-0">
                        <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt='Chair' />
                        <div>
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Get started</PrimaryButton>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Banner;