import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Staf from '../Staf/Staf';

const Stafs = () => {
    const [stafs, setStafs] = useState([])
    useEffect(() => {
        fetch('https://ghoulish-vampire-97561.herokuapp.com/stafs')
            .then(res => res.json())
            .then(data => setStafs(data));
    }, []);
    return (
        <div className=" my-5 py-5">
            <h2 className=" fw-bold text-center">Our Special Stafs</h2>
            <h5 className=" text-center" >------------x------------</h5>
            <Row xs={1} md={4} className="g-4 m-5 ">
                {
                    stafs.map(staf => <Staf
                        key={staf._id}
                        staf={staf}
                    ></Staf>)

                }


            </Row>
        </div>
    );
};

export default Stafs;