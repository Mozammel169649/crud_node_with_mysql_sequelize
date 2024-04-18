import React from 'react'
import { useParams } from 'react-router-dom';

function View() {
    // const data = new URLSearchParams(window.location);
    // const datas = data.get('roll');
    // console.log(datas);
    const { roll } = useParams();
    console.log('roll form useparams', roll);
    return (
        <div>
            <h3 className='p-4'>View Data</h3>
            <div className='col-md-6' style={{ margin: '0 auto' }}>
                <p>Name  : </p>
                <p>Roll  : </p>
                <p>Subject  : </p>
            </div>
        </div>
    )
}

export default View