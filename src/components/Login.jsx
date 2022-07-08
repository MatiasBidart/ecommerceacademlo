import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const Login = () => {
  const {handleSubmit, register, reset} = useForm()
  const [isErrorLogin, setisErrorLogin] = useState(false)

const navigate = useNavigate()

  const onSubmit = (data) =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
    .then(res =>{
      localStorage.removeItem('token'),
       localStorage.setItem('token', res.data.data.token),
       navigate('/')
      }
      )

    .catch(err =>
    localStorage.removeItem('token'),
    setisErrorLogin(true),
    setTimeout(()=>{
      setisErrorLogin(false)
    }, 500)
    )
    reset({
      email:'',
      password: ''
    })
  }




  return (
    <div className='form-dv'>
      <img className='user-img' src='https://repcel.com.mx/img/user.jpg' alt='Please, Log In...' />
      <form className='form-entry' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Email</label>
        <input type='email' {...register('email')}/>
        <label htmlFor='password'>Password</label>
        <input type='password'{...register('password')}/>
        <div>{isErrorLogin && 'invalid credentials, try again...'}</div>
        <input type='submit'/>

      </form>
      <div className='signup-redir'>
        <Link to='/signup'>
          <p className='text-for-signup'>or Sign Up...</p>
        </Link>
      </div>
    </div>
  )
}

export default Login