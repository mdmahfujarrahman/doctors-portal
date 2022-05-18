import React from 'react';
import people1 from '../../../../../src/img/images/people1.png';
import people2 from '../../../../../src/img/images/people2.png';
import people3 from '../../../../../src/img/images/people3.png';
import quote from '../../../../img/icons/quote.svg';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people1,
            city:"California"
        },
        {
            _id: 2,
            name: "Winson Herry",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            city:"California"
        },
        {
            _id: 3,
            name: "Winson Herry",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            city:"California"
        },
    ]

    return (
        <section className="container mx-auto my-28">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-5">
                {
                    reviews.map(review => <Review key={review._id} review={review}/>)
                }
            </div>
        </section>
    );
};

export default Testimonial;