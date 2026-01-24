
//In this case we have to retrieve all the users from localstorage
//display them on page after reload

function handleFormSubmit(event){
   event.preventDefault();
   const username=event.target.username.value
   const email=event.target.email.value
   const phone=event.target.phone.value

   const obj={username,email,phone}
   const stringobj=JSON.stringify(obj)
   localStorage.setItem(email,stringobj)

   displayy(obj)
   event.target.reset()
}

function displayy(obj){
    const ul=document.querySelector('ul')
    const li=document.createElement('li')

    li.textContent=obj.username+" "+obj.email+" "+obj.phone

    const deletebtn=document.createElement('button')
    const deletevalue=document.createTextNode("Delete")
    deletebtn.appendChild(deletevalue)
  
    li.appendChild(deletebtn)
    
    deletebtn.addEventListener("click",(event)=>{
        li.remove();
        localStorage.removeItem(obj.email)
    })
    ul.appendChild(li)

    for(let i=0;i<localStorage.length;i++){
        const ul=document.querySelector('ul')
        
    }

}