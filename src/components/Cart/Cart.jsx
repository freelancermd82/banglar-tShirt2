import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveToCart}) => {
    
    let message;
    if(cart.length === 0){
        message = <p>Please add some products.</p>
    }
    else{
        message = <div>
            <h3>You are a vip person.</h3>
            <p><small>Thanks for giving your money.</small></p>
        </div>
    }

    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h3>
            <p className={`bold ${cart.length ===4 ? 'purple': 'yellow'}`}>something</p>
            {
                cart.length > 2 ? <span className='purple'>Add more produce</span> : <span>Your are a poor.</span>
            }
            {message}
            {
                cart.map(ts => <p key={ts._id}>{ts.name} <button onClick={()=> handleRemoveToCart(ts._id)}>X</button></p>)
            }
            
            {
                cart.length === 2 && <p>Two product add.</p>
            }
            {
                cart.length ===3 || <h3>This product not three item.</h3>
            }
        </div>
       
    );
};

export default Cart;

/**
 * conditional rendering
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical && : (if the condition is true then the next thing will be displayed)
 * 4.Logical || (if the condition is false then the next thing will be displayed)
*/
/**
 * Conditional css class
 * 1. use ternary
 * 2. ternary inside template string
*/