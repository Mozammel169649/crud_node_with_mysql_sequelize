import React from 'react'
import axios from "axios"

const createNewData = async (event) => {
    event.preventDefault();
    // console.log(event);
    let form = event.target; console.log(event);
    let formData = new FormData(form);
    // await axios.get('http://localhost:8082/student/all', formData);
    // const data = await axios.post('/student/store',formData);
    // console.log("from client create page", data);
    // navigator("/");
}

function Create() {
    return (
        <div>
            <h3 className='p-4'>Create Data</h3>
            <div className='col-md-5' style={{ margin: '0 auto' }}>
                <form className='form' onSubmit={createNewData}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label for="roll">Roll</label>
                        <input type="Number" className="form-control" name="roll" id="roll" placeholder="Enter Roll" />
                    </div>
                    <div className="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Enter subject name" />
                    </div>
                    <div>
                        <input className='bg-success' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create