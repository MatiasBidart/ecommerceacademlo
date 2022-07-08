import React from 'react'

const ProductsOnPurchase = ({productInfo}) => {
  return (
    <div className='info-purchase-dv'>
        <p className='purchase-title'>{productInfo.title}</p>
        <p className='quantity'>{productInfo.productsInCart.quantity}</p>
        <p className='price'>{productInfo.price}</p>
    </div>
  )
}

export default ProductsOnPurchase