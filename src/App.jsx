import './App.css'
import FarmSimulator from './components/FarmSimulator/FarmSimulator'
import ChangingTheme from './components/ChangingTheme/ChangingTheme'
import Calculator from './components/Calculator/Calculator'
import TipCalculator from './components/TipCalulator/TipCalculator'
import DynamicForm from './components/DinamicForm/DynamicForm'

function App() {
  return (
    <>
      <FarmSimulator />
      <hr />
      <ChangingTheme />
      <hr />
      <Calculator />
      <hr />
      <TipCalculator />
      <hr />
      <DynamicForm />
    </>
  )
}

export default App
