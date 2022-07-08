import React from 'react'

const CartRows = ({info}) => {

  return (
    <div className='cart'>
        <p className='brand'>{info.brand}</p>
        <section className='int-align'>
        <p className='cart-title'>{info.title}</p>
        <p className='cart-price'>{info.price}</p>
        <p className='cart-quantity'> Quantity: {info.productsInCart.quantity}</p>
        </section>

    </div>
  )
}

export default CartRows