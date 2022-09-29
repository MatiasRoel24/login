import React from 'react'
import { useState } from 'react'
import { Link } from  'react-router-dom'


const Login = () => {


  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = ({currentTarget: input}) =>{
    setData({...data,[input.name]: input.value});
  }

  const guardarUsuario = () =>{ 
    console.log(data)
  }
  
  
  return (
    <div className='container__login'>
      <div className='container__linp'>
        <label className='login__label'>Nombre</label>
        <input
          name="firstName"
          type="text"
          className='login__input'
          placeholder='name'
          value={data.firstName}
          onChange={handleChange}
          required
        />
        <label className='login__label'>apellido</label>
        <input
          name="lastName"
          type="text"
          className='login__input'
          placeholder='lastName'
          value={data.lastName}
          onChange={handleChange}
          required
        />
        <label className='login__label'>email</label>
        <input
          name="email"
          type="text"
          className='login__input'
          placeholder='email'
          value={data.email}
          onChange={handleChange}
          required
        />
        <label className='login__label'>contraseña</label>
        <input
          name="password"
          type="password"
          className='login__input'
          placeholder='password'
          value={data.password}
          onChange={handleChange}
          required
        />

        <Link to="/hola" className='link__enviar'>
          <button className='login__enviar' onClick={guardarUsuario}>
            Sign up 
          </button>
        </Link>
          
      </div>
    </div>
  )
}

export default Login