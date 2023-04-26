import React from 'react';
import TestimonialsItem from './TestimonialsItem';
import testimonials from "../../../../data/testimonials"

const Testimonials = () => {
    return (
        <div className="testimonials-part page-container">
            <h3 className='text-center part-title'>Testimonials</h3>
            <div className="divider-part">
                <div className="divider"></div>
            </div>
            <div className="row g-0 px-2">
                {testimonials.map((item) => (
                    <TestimonialsItem
                        key={item.id}
                        name={item.user}
                        comment={item.comment}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials;