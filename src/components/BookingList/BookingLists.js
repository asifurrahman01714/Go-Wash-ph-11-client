import React from 'react';

const BookingLists = (props) => {
    console.log(props);
    const {service,name,description} = props.booking;
    return (
        <div className="col-md-6">
            <div className="card" style={{width: "100%"}}>
                <div className="card-body">
                    <h5 className="card-title">{service}</h5>
                    <h6 className="text-secondary">{name}</h6>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookingLists;