//Parent Elements

// var children=document.querySelector("li")
// var parent=children.parentElement
// console.log(parent)

//children
// var parent=document.querySelector("li")
// var child=parent.children
// console.log(child)

//child Nodes   //ismai space bhi count hota hai
// var parent=document.querySelector("ul")
// var child=parent.childNodes
// console.log(child)

//previousElemetSiblings
// console.log(document.querySelector(".hero").previousElementSibling)  //Shinchan

// console.log(document.querySelector(".hero").previousElementSibling.previousElementSibling)   //Andrew Tate


//replace child with other child
// const ul=document.querySelector('ul')
// const li=document.createElement('li')
// li.textContent="Giga Chad"
// const childtochange=ul.children[4]
// ul.replaceChild(li,childtochange)


//parentNode
// var parE=document.querySelector('ul')
// console.log(parE.parentNode)

//innerHTML and outerHTML
// let a=document.querySelector('.hero')
// a.innerHTML='<b>Gian</b>'
// console.log(a)

let a=document.querySelector('.hero')
a.outerHTML='<b>Gian</b>'
console.log(a)