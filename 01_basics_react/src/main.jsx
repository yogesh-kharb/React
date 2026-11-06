import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {jsx as _jsx} from "react/jsx-runtime" // this can also be done 
// let us jump to opensource on github to see the code
function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}
const anotheruser = "dhanno aur jhandu";

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
};

const correctElement = React.createElement(
    'a' ,
    {href : 'https://google.com' , target : '_blank'},

    'Click me to visit google ha ha',
    anotheruser
)

createRoot(document.getElementById('root')).render(
        correctElement
)