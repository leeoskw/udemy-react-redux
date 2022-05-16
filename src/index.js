import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'

import Primeiro from './components/basicos/Primeiro-componente'
import ComParametro from './components/basicos/Componente-com-Parametros'
import Fragmento from './components/basicos/Fragmento'

const elemento = document.getElementById('root')
// ReactDOM.render('Olá mundo!', elemento)
// ReactDOM.render(<div>Hello, world!</div>, elemento)

// ReactDOM.render(
// <div>
//     <Primeiro></Primeiro> <br></br>
//     <Primeiro></Primeiro>
// </div>
// , elemento) // utilizando um componente criado


ReactDOM.render(
    <div>
        <ComParametro titulo="Titulo: Segundo Componente" subtitulo="meu subtitulo!!"></ComParametro>
        <Fragmento></Fragmento>
    </div>,
    elemento
)