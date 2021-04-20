
import React, { useContext } from 'react';
import {Link, useHistory} from "react-router-dom";
import { IdContext } from '../../../App';
const ServiceDetail = ({ service }) => {
    const history = useHistory();

    // Here I have read id from service._id and then pass it through handleClick..then set it in setId...Then this id will set in contextApi..which will be called through any component...
    const [id, setId] = useContext(IdContext);
    function handleClick(_id) {
        history.push("/book");
        setId(_id);
      }

    return (
        <div className="col-md-4 text-center">
            <div class="card shadow" style={{width: '100%'}}>
                    <div class="card-body">
                        <h5 class="card-title">{service.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{service.service1}</li>
                        <li class="list-group-item">{service.service2}</li>
                        <li class="list-group-item">{service.service3}</li>
                    </ul>
                    {/* <button className="btn-primary"><Link to="/book">Book Now</Link></button> */}
                    <button className="btn-primary" onClick={()=> handleClick(service._id)}  >Book Now</button>
            </div>
        </div>
    );
};

export default ServiceDetail;