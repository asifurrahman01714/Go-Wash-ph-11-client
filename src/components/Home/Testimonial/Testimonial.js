import React from 'react';

const Testimonial = (props) => {
    console.log(props);
    const {quote,name,from } = props.review;
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex  align-items-center">
                {
                props.review.image ? <img className="mx-3"  width="60"  src={`data:image/png;base64,${props.review.image.img}`}/>
                :
                <img  className="mx-3"  width="60" src={`https://lit-shore-90924.herokuapp.com/${props.review.img}`} alt=""/>
                }

                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            
       </div>
    );
};

export default Testimonial;