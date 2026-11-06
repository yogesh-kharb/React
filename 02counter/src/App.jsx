import { useState } from 'react' // this brings the hooks to us and we have to write the desired name of the hook into the {...}
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {

    // but ye sab kaam ui pe change nahi ho raha but console me sab sahi chal raha hai
    // ye kaam karne ke liye hoooks seen me aate hai
    // useState : propogate the change to the UI
    let [counter , dhannoCounter] = useState(5)  // in bracket we give the initlaizing value of the variable
    // this is equivalent to : let counter = 5; 
    const incvalue = () => {
        if(counter == 20){
            alert("!!!!! Counter can not be above 20. !!!!!");
        }
        counter ++;
        dhannoCounter(counter);
        console.log(`Counter value increased to ${counter} after increase by 1`)
    }
    const decvalue = () => {
        if(counter == 0){
            alert("!!!!! Counter can not be negative. !!!!!");
        }
        counter --;
        dhannoCounter(counter); // this is updating the value of counter at every place in UI
        console.log(`Counter value decreased to ${counter} after decrease by 1`)
    }
    return (
        <>
            <h1>Hello Dhanno</h1>
            <h2>Counter Value : {counter}</h2>
            <button onClick = {incvalue}>Increase Value</button>
            <br />
            <br />
            <button onClick = {decvalue}>Decrease Value</button>
        </>
    )
}

export default App
