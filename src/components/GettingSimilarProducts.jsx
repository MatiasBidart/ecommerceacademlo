import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const GettingSimilarProducts = ({product}) => {
    const allProducts = useSelector(state=>state.infoSlice)
    const [filterProducts, setFilterProducts] = useState()
useEffect(() => {
    if(allProducts.length !== 0){
       const filter = allProducts?.filter(e => e.category.name === product.category)
       setFilterProducts(filter)
      }
    
}, [product]);

 

  return (
    <div className='similar'>
        <h3>More Like This</h3>
    <div className='filter-dv'>
        
    {
    filterProducts?.map(e => {if(e.title !== product.title){
        return (<ProductCard key={product.id} products={e}/>)}})
    }
    </div>
    </div>
  )
}

export default GettingSimilarProducts