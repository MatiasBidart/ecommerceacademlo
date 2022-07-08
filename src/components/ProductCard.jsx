import React,{useEffect} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import getConfig from '../utils/getConfig'


const ProductCard = ({products}) => {
    const productRoute = '/products/' + products.id
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
  

    const addCartProduct = ()=>{
        const data = {
        "id": products.id,
        "quantity": 1
        }
        axios.post(URL, data, getConfig())
        .then(res => console.log(res.data))
        .catch(err=> console.log(err))
    }



return (
    <div className="product-card">
        <div className='add-to-cart' onClick={()=> addCartProduct()}><FontAwesomeIcon icon={faCartShopping} /></div>
        <Link to={productRoute}>
            <div className="image">   
                <img src={products.productImgs[1]} alt="" className="over" id='back-img'></img>             
                <img src={products.productImgs[0]} alt="" id='front-img'></img>
            </div>
        <div className="info">
            <span className="brand"></span>
        <strong >{products.title}</strong>
    <span className="price">Price</span>
    <span className="amount">${products.price}</span></div>
    </Link>
    <button className="cart-button"></button>
    </div>
  )
}

export default ProductCard