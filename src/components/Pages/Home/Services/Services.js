import React from 'react';
import cavity from '../../../../../src/img/images/cavity.png';
import fluoride from '../../../../../src/img/images/fluoride.png';
import whitening from '../../../../../src/img/images/whitening.png';
import Service from '../Service/Service';
const Services = () => {
    const services = [

        {
            _id:1,
            name: 'Fluoride Treatment',
            description: 'Typically professional treatments contain a high concentration of fluoride.',
            img:fluoride
        },
        {
            _id:2,
            name: 'Cavity Filling',
            description: 'Amalgam has been used by dental professionals for more than a century.',
            img:cavity
        },
        {
            _id:3,
            name: 'Teeth Whitening',
            description: 'Tooth whitening is the process of lightening the color of human teeth..',
            img:whitening
        },


    ]


    return (
            <div className="my-32 container mx-auto">
                <div className="text-center mx-auto">
                    <h3 className="text-primary text-xl font-bold uppercase">Our Services</h3>
                    <h2 className="text-3xl">Services We Provide</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-[70px] ">
                    {
                        services.map(service => <Service key={service._id} service={service}/>)
                    }
                </div>
            </div>
    );
};

export default Services;