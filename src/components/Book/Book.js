import React, { useContext, useEffect, useState } from 'react';
import { IdContext, UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';



const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [id, setId] = useContext(IdContext);
    const [book, setBook] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/book/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBook(data);
        })
    },[])

    
   
    console.log(id);

    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

  


    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        
        formData.append('name', info.name);
        formData.append('service', info.service);
        formData.append('description', info.description);
        formData.append('email', info.email);
        

        fetch('http://localhost:5000/Book', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="row">
                    <div className="col-md-8">
                        <h5 className="text-brand">Fill Up This Form</h5>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder={loggedInUser.email || "Enter Your Email"} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder={loggedInUser.name || "Enter Your Name"} />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Service Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="service" placeholder={book[0]?.name || " Enter Service Name"} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Write Your Description</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Write Your Description" />
                            </div>
                      

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div className="col-md-4">
                        <ProcessPayment></ProcessPayment>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Book;