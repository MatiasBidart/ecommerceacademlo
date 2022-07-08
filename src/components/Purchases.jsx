import React, {useState, useEffect} from 'react'
import axios from 'axios'
import getConfig from '../utils/getConfig'
import PurchaseItem from './PurchaseItem'

const Purchases = () => {
  const [purchases, setPurchases] = useState([])
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))  
    }, [])

  return (
    <div className='purchases-dv'>
    { purchases?.map(
      purchase =>(<PurchaseItem 
      key={purchase.id}
      itemInfo={purchase}
      />))}
    </div>
  )
}

export default Purchases