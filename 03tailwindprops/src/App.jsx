import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'dhanno',
    age: 9.5,
    childs: 5
  }
  let childNames = ["gir" , "jhandu1" , "jhandu2" , "dhenu" , "jhandu3" , "jhandu4"];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card channel = {"dhanno aur milk"} childs = {childNames}/>
      {/* ye likh to diya par 1 problem hai ki card pe naam to dono me same aayega
        we will deal with it using the props so we will pass the props
      */}
    </>
  )
}

export default App
