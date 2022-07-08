import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const {handleSubmit, register} = useForm()
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    const onSubmit = (data) =>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
        axios.post(URL, data)
        .then(res =>{
           localStorage.removeItem('token'),
           localStorage.setItem('token', res.data.data.token)
           navigate('/')
          }
          )

          .catch(err => setIsError(true))
 
          .finally(navigate('/login'))
        }


    
  return (
    <div className='form-dv'>
        <img className='sign-user-img' src='https://repcel.com.mx/img/user.jpg' alt='Please, Sign Up...' />
        <form className='form-entry' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' {...register('firstName')}/>

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' {...register('lastName')}/>

        <label htmlFor='email'>Email</label>
        <input type='email' {...register('email')}/>


        <label htmlFor='password'>Password</label>
        <input type='password'{...register('password')}/>

        <label htmlFor='email'>Phone</label>
        <input type='text' {...register('phone')}/>

        <label htmlFor='email'>Role</label>
        <input type='text' {...register('role')}/>

        <div>{isError && 'Something is wrong, try again...'}</div>
        <input className='mrgn-tp' type='submit'/>

      </form>
    </div>
  )
}

export default SignUp