import './App.css'
import {useRef} from 'react'
import { Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/Cart'
import ProtectedRoutes from './components/ProtectedRoutes'
import Purchases from './components/Purchases'
import Error404 from './components/Error404';
import ProductRoute from './components/ProductRoute';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faUser, faBagShopping, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { getInfo } from './store/slices/getInfo.slice'
import SignUp from './components/SignUp';




function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.infoSlice)
   useEffect(() => {
   dispatch(getInfo())
 }, [])
 
 const actionsNavi = useRef()

 const clickBurgerMenu = () => {
  actionsNavi.current.classList.toggle('display-none')

 }
 

  return (
    <div className="App">
       <div className="nvbr nvbr-jstfy">
    <div className="pos-fxd">
      <nav className='navi'>
      <Link to="/"><div className="ttle">
            <strong>e-commerce</strong>
          </div></Link>
          <div ref={actionsNavi} className='actions-navi'>
            <div className='elene'>
            <ul className='actions'>
              <li>
              <NavLink to="/login"><FontAwesomeIcon icon={faUser}/></NavLink>
              <p>Log In</p>
              </li>
              <li>
              <NavLink to="/purchases">
              <FontAwesomeIcon icon={faBagShopping}/></NavLink>
              <p>Purchases</p>
              </li>
              <li>
              <NavLink to="/cart">
              <FontAwesomeIcon icon={faCartShopping}/></NavLink>
              <p>Cart</p>
              </li>
            </ul>
            </div>

           </div>
           <div id='bars' onClick={()=> clickBurgerMenu()}>
          <FontAwesomeIcon icon={faBars}/>
           </div>
      </nav>
    </div>
    
    </div>
    
    <Routes>
      <Route path='/' element={<Home products={products}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>  
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Route>
      <Route path='*' element={<Error404/>}/>
      <Route path='/products/:id' element={<ProductRoute/>}/>

      <Route path='/signup' element={<SignUp/>}/>
      
    </Routes>
    </div>
  )
}

export default App
