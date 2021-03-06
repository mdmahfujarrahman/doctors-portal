import React from 'react';

const InfoCard = ({img, cardTitle,bgClass}) => {
    return (
        <div className={`card lg:card-side flex justify-center bg-base-100 shadow-xl mx-auto ${bgClass}`}>
            <figure className="lg:pl-5 pt-5">
                <img src={img} alt="Album"/>
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;