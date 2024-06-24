import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';



export const ringContext = createContext('gold')
export const MoneyContext = createContext(0);
const Grandpa = () => {

    const ring = 'diamond';
    const [money, setMoney] = useState(0);


    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>Has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <ringContext.Provider value='golden color'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </ringContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 
 * 1. create context
 * 2. Create a provider and pass a value
 * 2. use useContext to receive the value
*/