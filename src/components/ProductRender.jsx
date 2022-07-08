import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GettingSimilarProducts from './GettingSimilarProducts'
import axios from 'axios'
import getConfig from '../utils/getConfig'

const ProductRender = ({producter}) => {
    const [counter, setCounter] = useState(1)
    const [traslate, setTraslate] = useState(0)

    const handleLeftArrow = () => {
        if(traslate > 0){
            setTraslate(traslate -1)
        }else{
            setTraslate(0)
        }

    }
    const handleRigthArrow = ()=> {
        if(traslate < 2){
            setTraslate(traslate +1)
        } else {
            setTraslate(2)
        }
    }

    const handleRest = () => {
        if(counter != 1){
            setCounter(counter -1)
        }
        else {
            setCounter(1)
        }
    }


    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
  

    const addCartProduct = ()=>{
        const data = {
        "id": producter.id,
        "quantity": counter
        }
        axios.post(URL, data, getConfig())
        .then(res => console.log(res.data))
        .catch(err=> console.log(err))
    }



  return (
    <div>
    <section className='main-container'>
     <div className="history">
        <Link to="/">Home</Link>
        <div className="separator"></div>
        <b>{producter.title}</b>
    </div>
    <div className='product-info-flex'>
        <div className='col'>
            <div className='images-gallery'>
            <div className="gallery">
             <div className="button-gallery left"><button onClick={()=> handleLeftArrow()}></button></div>
             <div className="button-gallery right"><button onClick={()=> handleRigthArrow()}></button></div>
             <ul className='images-list' style={{width: "300%", transform: `translateX(calc(-100% * ${traslate}/3`}} id='ul'>
             <li>
                <img src={producter.productImgs[0]} alt=""/>
                </li>
                <li>
                <img src={producter.productImgs[1]} alt=""/>
                </li>
                <li>
                <img src={producter.productImgs[2]} alt=""/>
                </li>

             </ul>
            </div>
            {/* estamos trabajando acá */}
            <ul className='images-preview'>
                <li className={traslate === 0 ? 'selected' : ''} onClick={() => setTraslate(0)}>
                <img src={producter.productImgs[0]} alt=""/>
                </li>
                <li className={traslate === 1 ? 'selected' : ''} onClick={() => setTraslate(1)}>
                <img src={producter.productImgs[1]} alt=""/>
                </li>
                <li className={traslate === 2 ? 'selected' : ''} onClick={() => setTraslate(2)}>
                <img src={producter.productImgs[2]} alt=""/>
                </li>
                
            </ul>
            </div>
        </div>
    </div>
    <div className='product-actions'>
        <div className="info">
            <span className="brand"></span>
        <strong >{producter.title}</strong>
    <span className="price">Price</span>
    <span className="amount">${producter.price}</span></div>
    <div className='counter-dv'> 
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <div className='counter'>{counter}</div>
        <button onClick={()=>handleRest()}>-</button>
    </div>
            <button onClick={()=> addCartProduct()} className='cart-button-prdct'>Agregar al carrito </button>
       

    </div>
    <div className='texter'>
        <p>{producter.description}</p>
    </div>
    </section>

    <GettingSimilarProducts product={producter}/>
 
    </div>
    
  )
}

export default ProductRender