import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';



const AddService = () => {
    const [info, setInfo] = useState({});
    // const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        // formData.append('file', file);
        formData.append('name', info.name);
        formData.append('service1', info.service1);
        formData.append('service2', info.service2);
        formData.append('service3', info.service3);
        

        fetch('https://lit-shore-90924.herokuapp.com/addAService', {
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
                <h5 className="text-brand">Add a AddService</h5>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Service1</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="service1" placeholder="Service1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Service2</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="service2" placeholder="Service2" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Service3</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="service3" placeholder="Service3" />
                    </div>

                    
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div> */}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;