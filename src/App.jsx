import './App.css'


import logo from './assets/react.svg'
import Gridcell from './components/grid';

function App() {

//Para ciclo de vida de el componente(creado,actualizado,borrado)

  //Retornar el componente
  return (
    <>
    <div class="container">
      <img src={logo}></img>
      <h1>Acceso a API</h1>
      <div>
        <Gridcell/>
      </div>
    </div>
    </>
    
  )
}

export default App
