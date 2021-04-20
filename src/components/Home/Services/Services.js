import React, { useEffect, useState } from 'react';
// import fluoride from '../../../images/fluoride.png';
// import cavity from '../../../images/cavity.png';
// import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'
const Services = () => {
    const [serviceList, setServiceList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        fetch('https://lit-shore-90924.herokuapp.com/serviceList')
        .then(res => res.json())
        .then(data => {
            setServiceList(data);
            console.log(data);
            setLoading(false);
        })
    }, [])



    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5 justify-content-center">
                    {
                        loading ? <div className="spinner-border text-primary " role="status">
                                    <span className="visually-hidden "></span>
                                  </div>
                                  
                                  :
                                  serviceList.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }

            </div>
        </div>
        </section>
    );
};

export default Services;