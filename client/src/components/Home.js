import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CategoryContext } from '../App';

function Home() {
    const [data] = useContext(CategoryContext);
    return (
        <div>
            <h3 className='p-4'>All Data</h3>
            <div className='col-md-6 success' style={{ margin: '0 auto' }}>
                <Link to={"/create"} className='btn btn-success mb-2'>Create Data</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Roll</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((e) => {
                            return (
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.roll}</td>
                                    <td>{e.subject}</td>
                                    <td >
                                        <Link to={`/edit/${e.roll}`} className='btn btn-secondary'>Edit</Link>
                                        <Link to={`/view/${e.roll}`} className='btn btn-info ml-2'>View</Link>
                                        <Link onClick={""} className='btn btn-danger ml-2'>Delete</Link>
                                    </td>
                                </tr>
                            )
                        }

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;