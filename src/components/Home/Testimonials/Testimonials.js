import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const Testimonials = () => {
    const [reviewList, setReviewList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        fetch('http://localhost:5000/reviewList')
        .then(res => res.json())
        .then(data => {
            setReviewList(data);
            console.log(data);
            setLoading(false);
        })
    }, [])

    
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase text-center">Testimonial</h5>
                   <h1 className="text-center">What Our Client <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviewList.map(review => <Testimonial review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;