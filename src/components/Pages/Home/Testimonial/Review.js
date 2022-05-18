import React from 'react';

const Review = ({review}) => {
    const {name, img, reviews, city} = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviews}</p>
                <div class="flex items-center mt-2">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img  src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{name}</h4>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;