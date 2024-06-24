import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const angti = useContext(ringContext)
    return (
        <div>
            <h3>Special</h3>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Special;