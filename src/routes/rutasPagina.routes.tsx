import { Routes, Route } from 'react-router-dom'
import { Inicio } from '../pages/inicio'

export const RutasPagina = () => {
    return (
        <Routes>
            <Route path='/' element={ <Inicio />}/>
        </Routes>
    )
    
}