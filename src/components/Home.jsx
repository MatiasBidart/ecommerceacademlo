import React from 'react'
import ProductCard from './ProductCard'


const Home = ({products}) => {



  return (
    <div className='home-dv'>
      {products.map(product => 
      <ProductCard 
      key={product.id} 
      products={product}
      />)}
    </div>
  )
}

export default Home