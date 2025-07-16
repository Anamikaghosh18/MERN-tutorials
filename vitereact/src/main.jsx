import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// myapp m jo v likha jata hai parse hokr reactelemnt k form m change hota hai.....
function MyApp(){
  return (
    <div>
        <h1>Custom app</h1>
    </div>
  )
}
/*
const reactElement = {
    // syntx glat hai asli render jo expect kr rha hoga waise key - value pair m nhi hai ....
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank',
    },
    Children: 'click me to visit google'
}
*/

const anotherElement = (
  // ye work krega 
  <a href ="https://google.com" target = "_blank">Visit Google
  </a>
)
const anoterUser = "chai ar react"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' ,target: '_blank'},
  'Click me to Visit Google',
  anoterUser

  )
createRoot(document.getElementById('root')).
render(
    /*
    reactElement

    --- ye work nhi krega 
    */
   reactElement
  
)
