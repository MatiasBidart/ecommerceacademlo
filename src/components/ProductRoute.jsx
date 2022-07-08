import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductRender from './ProductRender'



const ProductRoute = () => {
    const [product, setProduct] = useState('')
    const {id}=useParams()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => err)
    }, [id])

   
  return (
    <div className='render-dv'>
    { product ? <ProductRender producter={product}/> : <img className="loader" src='\assets\img\loader.gif' alt=''/>}
    </div>
  )
}

export default ProductRoute