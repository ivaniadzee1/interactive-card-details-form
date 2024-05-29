import { SetStateAction, useState } from "react"
import Cards from "./components/Cards"
import Inputs from "./components/Inputs"


function App() {

  const [name, setName] = useState("JANE APPLESEED")
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const [cvc, setCvc] = useState("000")
  const [mm, setMm] = useState("00")
  const [yy, setYy] = useState("00")

  const changeName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value)
  }
  const changeCardNumber = (e: { target: { value: SetStateAction<string> } }) => {
    setCardNumber(e.target.value)
  }

  const changeCvc = (e: { target: { value: SetStateAction<string> } }) => {
    setCvc(e.target.value)
  }
  const changeMm = (e: { target: { value: SetStateAction<string> } }) => {
    setMm(e.target.value)
  }
  const changeYy = (e: { target: { value: SetStateAction<string> } }) => {
    setYy(e.target.value)
  }


  return (
    <div>
      <Cards
        name={name}
        cardNumber={cardNumber}
        cvc={cvc}
        mm={mm}
        yy={yy}
      />


      <Inputs 
       changeName={changeName}
       changeCardNumber={changeCardNumber}
       changeCvc={changeCvc}
       changeMm={changeMm}
       changeYy={changeYy}
      />
    </div>
  )
}

export default App
