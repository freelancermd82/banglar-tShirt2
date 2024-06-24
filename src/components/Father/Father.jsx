import React from 'react';
import MySelfe from '../MySelfe/MySelfe';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring }) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <MySelfe ring={ring}></MySelfe>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;