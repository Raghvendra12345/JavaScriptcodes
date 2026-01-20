const div1=document.querySelectorAll("div")
const div2=div1[1]

const header=document.querySelector("#header")
const h3=document.createElement("h3")
h3.textContent="Buy high quality organic fruits online"
h3.style.fontStyle="italic"

header.appendChild(h3)


const para=document.createElement("p")
const para1=document.createTextNode("Total fruits:4")
para.id="fruits-total"

para.appendChild(para1)

div2.appendChild(para)

const fruits=document.querySelector(".fruits")
div2.insertBefore(para,fruits)
