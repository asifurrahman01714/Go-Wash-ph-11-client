import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import BookingLists from './BookingLists';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        fetch('https://lit-shore-90924.herokuapp.com/bookingList')
        .then(res => res.json())
        .then(data => {
            setBookingList(data);
            console.log(data);
            setLoading(false);
        })
    }, [])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
               
               <div className="row">
               {
                    loading ? <div className="spinner-border text-primary " style={{marginTop:'50vh'}} role="status">
                        <span className="visually-hidden "></span>
                    </div>
                  
                  :
                    bookingList.map(booking =>  <BookingLists booking={booking}></BookingLists>)
                }
               </div>
                
            </div>
        </section>
    );
};

export default BookingList;