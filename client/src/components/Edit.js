import React from 'react'



function Edit() {

    return (
        <div>
            <h3 className='p-4'>Edit Data</h3>
            <div className='col-md-5' style={{ margin: '0 auto' }}>
                <form className='form' action=''>
                    <div  className="form-group">
                        <label for="name">Name</label>
                        <input type="text"  className="form-control" name="name" id="name" placeholder="Enter Name"/>
                    </div>
                    <div  className="form-group">
                        <label for="roll">Roll</label>
                        <input type="Number"  className="form-control" name="roll" id="roll" placeholder="Enter Roll"/>
                    </div>
                    <div  className="form-group">
                        <label for="subject">Subject</label>
                        <input type="text"  className="form-control" name="subject" id="subject" placeholder="Enter subject name"/>
                    </div>
                    <div>
                        <input className='bg-success' type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit