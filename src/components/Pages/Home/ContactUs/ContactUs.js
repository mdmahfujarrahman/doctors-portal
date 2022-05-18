import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section className="bg-appointment-bg mx-auto py-12">
            <div className="my-24">
                <div className="text-center">
                    <h4 className="text-xl text-primary font-bold my-5">Contact Us</h4>
                    <h2 className="text-3xl text-white my-5">Stay connected with us</h2>
                </div>
                <div className="flex flex-col w-64 md:w-96 mx-auto">
                    <input className="my-5 pl-2 py-3 rounded" type="email" placeholder="Email Address" />
                    <input className="my-5 pl-2 py-3 rounded" type="text" placeholder="Subject" />
                    <textarea className="my-5 pl-2 py-3 rounded" type="text" placeholder="Your message" />
                    <div className="w-32 mx-auto text-center">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;