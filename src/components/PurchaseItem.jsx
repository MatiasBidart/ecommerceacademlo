import React from 'react'
import ProductsOnPurchase from './ProductsOnPurchase'

const PurchaseItem = ({itemInfo}) => {
  return (
    <div className='purhcase-cntnr'>
      <h5>{itemInfo.updatedAt}</h5>
      {
        itemInfo.cart.products.map(product=> (<ProductsOnPurchase key={product.id} productInfo={product} />) )
      }
        
    </div>
  )
}

export default PurchaseItem