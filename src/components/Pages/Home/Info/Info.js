import React from 'react';
import clock from '../../../../img/icons/clock.svg';
import marker from '../../../../img/icons/marker.svg';
import phone from '../../../../img/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';

const Info = () => {

    
    return (
        <section className="container mx-auto md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}/>
                <InfoCard bgClass="bg-accent" cardTitle="Visit our location" img={marker}/>
                <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" img={phone}/>
            </div>
        </section>
    );
};

export default Info;