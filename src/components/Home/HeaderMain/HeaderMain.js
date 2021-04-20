import React from 'react';
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: 'white'}}>Dry Cleaning And <br/> Laundry To Your Door..!!</h1>
                <p className="text-white">We will take care about cleanness and delivery with on time.</p>
                <Link to="/dashboard" className="btn btn-brand">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src="https://i.ibb.co/W3J14MQ/GoWash.jpg" alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;