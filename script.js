// javascript used
// import and export
// Date()
// Math()
// setInterval()
// The ternary operator
// object destructuring

import { getStockData } from "./fakeStockAPI.js"


setInterval(function(){
    const stockData = getStockData()
    stockTickerupdate(stockData)
}, 1000)

let prevPrice = null

function stockTickerupdate(stockData) {
    const companyName = document.getElementById("name")
const stockSymbol = document.getElementById("symbol")
const stockPrice = document.getElementById("price")
const stockTime = document.getElementById("time")
const stockDisplayIcon = document.getElementById("price-icon")
    const {name,symbol,price,time} = stockData
    const priceIconDirection = price < prevPrice ? "red.png"
    : price > prevPrice ? "green.png" 
    : "black.png"
    const displayPriceIcon = document.createElement("img")
    displayPriceIcon.src = `images/${priceIconDirection}`
    stockDisplayIcon.innerHTML = ""
    stockDisplayIcon.appendChild(displayPriceIcon)
    companyName.textContent = `Name: ${name}`
    stockSymbol.textContent = `Symbol: ${symbol}`
    stockPrice.textContent = `Price: ${price}`
    stockTime.textContent = `Time: ${time}`
    prevPrice = price
}