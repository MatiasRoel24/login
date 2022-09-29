import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
        <h1>Usted pudo ingresar a la pagina</h1>
            <Link to={`/`}>
                <button>Volver</button>
            </Link>
        
    </div>
  )
}

export default Inicio