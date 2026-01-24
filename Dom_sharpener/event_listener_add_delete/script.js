const fruit=document.querySelectorAll(".fruit")
console.log(fruit)


for(let i=0;i<fruit.length;i++){
    const editt=document.createElement("button")
    editt.textContent="Edit"
    editt.className="edit-btn"
    fruit[i].appendChild(editt)
}


const form=document.querySelector('form')
const fruits=document.querySelector('.fruits')
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const addfruit=document.getElementById("fruit-to-add")
    const newfruit=document.createElement('li')
    const fruitvalue=document.createTextNode(addfruit.value)
     
    newfruit.appendChild(fruitvalue)
    newfruit.className='fruit'

    fruits.appendChild(newfruit)
    console.log(newfruit)

    const deltebtn=document.createElement('li')
    const deletevalue=document.createTextNode("X")
    deltebtn.appendChild(deletevalue)
    deltebtn.className="delete-btn"
    newfruit.appendChild(deltebtn)
    fruits.appendChild(newfruit)

    const editbtn=document.createElement('li')
    const editvalue=document.createTextNode("Edit")
    editbtn.appendChild(editvalue)
    editbtn.className="edit-btn"
    newfruit.appendChild(editbtn)
    fruits.appendChild(newfruit)

})

fruits.addEventListener("click",(event)=>{
    if(event.targer.classList.contains(delete-btn)){
        const deleted=event.target.parentElement;
        fruits.removeChild(deleted)
    }
})