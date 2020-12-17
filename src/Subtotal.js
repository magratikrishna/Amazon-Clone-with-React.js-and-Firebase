import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
// import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    var CurrencyFormat = require('react-currency-format');


    return (
        <div className='subtotal'>
                <p>
                    Subtotal ({basket.length} items): <strong>
                                                    <CurrencyFormat value={getBasketTotal(basket)}                                                                 displayType={'text'} 
                                                        thousandSeparator={true}
                                                        decimalScale={2}
                                                        dispalyType={'text'}
                                                        prefix={'$'} 
                                                    />
                                                    </strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            {/* <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                dispalyType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            /> */}

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
