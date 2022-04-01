// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
//main.js LINKS no functions
import 'bootstrap'
import { addGuest, loadGuests } from './week10'
import { playTicTacToe } from './week11'

console.log("Hello Console")
//only run if in week10 body page
if(document.querySelector("#week10")) {
    document.querySelector("#guestForm").onsubmit = addGuest
    window.onload = loadGuests
}
if(document.querySelector("#week11")) {
    playTicTacToe()
}