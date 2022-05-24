import ComParametro from './components/basicos/Componente-com-Parametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro-componente'
import './App.css'

export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className='Exercicios'>
                <Card titulo="#04 - Desafio Aleatorio" color="#080">
                    <Aleatorio minimo={1} maximo={40}></Aleatorio>
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Passagem de Parâmetros" color="#E8B71A">
                    <ComParametro titulo="Meu Titulo" subtitulo="Meu Subtitulo"></ComParametro>
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>



        </div>
    )
}