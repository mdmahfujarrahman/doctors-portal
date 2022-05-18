import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="text-center">
                        <h2 className="card-title justify-center text-secondary my-2">{name}</h2>
                    
                <p className="my-2">{
                    slots.length 
                    
                    ? <span>{slots[0]}</span> : <span className="text-red-500">No Slots Available</span>
                    
                    }</p>
                <p className="my-2">{slots.length} {slots.length > 1 ? 'Spaces': 'Space'} Available</p>
                </div>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-secondary text-white uppercase">Book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;