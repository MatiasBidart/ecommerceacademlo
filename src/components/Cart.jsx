import React,{useEffect, useState} from 'react'
import axios from 'axios'
import getConfig from '../utils/getConfig';
import CartRows from './CartRows';

const Cart = () => {
  const [cartResponse, setCartResponse] = useState()
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL,getConfig())
    .then(res =>setCartResponse(res.data.data.cart.products))
    .catch(err =>console.log(err))
    
  }, []);
  return (
    <div className='cart-cntnr'>
          {cartResponse?.map(i => (<CartRows key={i.id} info={i}/>))}
    </div>
  )
}

export default Cart