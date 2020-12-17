import React from 'react'
import './Order.css'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

var CurrencyFormat = require('react-currency-format')

function Order({ order }) {
    const [{ basket, user}, dispatch] = useStateValue();

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <h3>
                Order Total: <strong>
                                <CurrencyFormat 
                                    value={getBasketTotal(basket) / 100}                                                                 displayType={'text'} 
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    dispalyType={'text'}
                                    prefix={'$'} 
                                />
                            </strong>
            </h3>
        </div>
    )
}

export default Order;
