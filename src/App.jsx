import './App.css'
import logo from './assets/react.svg'
import Gridcell from './components/grid';
import DemoCarrousel from './components/galeria';
import Clock from './components/clock';
import Cronometro from './components/cronómetro';


function App() {

  return (
    <>
    <div className="container">
      <img src={logo}></img>
      <h1>Acceso a API</h1>
      <Clock/>
      <div>
        <Gridcell/>        
      </div>
      <h1>Carrousel en React</h1>
      <div>
        <DemoCarrousel/>
      </div>
      <div>
        <Cronometro/>
      </div>
    </div>
    </>
  )
}

export default App
