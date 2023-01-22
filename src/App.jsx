import './App.css'


import logo from './assets/logo.png'
import Gridcell from './components/grid';

function App() {

//Para ciclo de vida de el componente(creado,actualizado,borrado)

  //Retornar el componente
  return (
    <>
    <div>
      <img src={logo}></img>
      <h1>Lanzamientos</h1>
      <div>
        <Gridcell/>
      </div>
    </div>
    </>
    
  )
}

export default App
