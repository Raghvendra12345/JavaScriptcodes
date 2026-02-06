

const API="https://crudcrud.com/api/12cdcef6fba24ac5a5afd75993e3c0e8/food"

window.addEventListener("DOMContentLoaded",initialize)

function initialize(){
    const ul=document.querySelector('ul')
    ul.innerHTML=""
    for(let i=0;i<localStorage.length;i++){   
        const key=localStorage.key(i)
        const details=JSON.parse(localStorage.getItem(key))
        display(details)
    }
}



function handleFormSubmit(event){
  event.preventDefault();
  
  const dish=event.target.dish.value
  const price=event.target.price.value
  const table=event.target.table.value
  
  const obj={dish,price,table}
  
  const stringobj=JSON.stringify(obj)
  
//   localStorage.setItem(table,stringobj)
axios
  .post(API,obj)
  .then((res)=>{

    display(res.data)
    event.target.reset()
  })

  display(obj)
  
}


function display(obj){
  const ul=document.querySelector('ul')
  const li=document.createElement('li')
  
  li.textContent=obj.dish+" "+obj.price+" "+obj.table

  const deletebtn=document.createElement('button')
  const deletvalue=document.createTextNode("Delete")
  deletebtn.appendChild(deletvalue)

  deletebtn.addEventListener('click',()=>{
    li.remove()
    localStorage.removeItem(obj.table)
  })
  li.appendChild(deletebtn)
  ul.appendChild(li)
}