import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Brother = () => {

    const ring = useContext(ringContext);
    return (
        <div>
            <h3>Brother</h3>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brother;