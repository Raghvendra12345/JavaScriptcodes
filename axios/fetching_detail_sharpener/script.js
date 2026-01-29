window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/22d5825df85f4029b1ee7d289b97c1e1/appointmentData")
    .then((response)=>{
        // display(response.data)
        console.log(response)
        for(let i=0;i<response.data.length;i++){
            display(response.data[i])
        }
    })
    .catch((error)=>console.log(error))
})



function handleFormSubmit(event){
    event.preventDefault();

    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;

    const userDetails={
        username,
        email,
        phone
    };
    
    axios.post("https://crudcrud.com/api/22d5825df85f4029b1ee7d289b97c1e1/appointmentData",userDetails)
    .then((response)=>{
        display(response.data)
        console.log(response)
    })
    .catch((error)=>console.log(error))
}



function display(userDetails){
    const ul=document.querySelector("ul")
    const li=document.createElement('li')
    li.textContent=`${userDetails.username} ${userDetails.email} ${userDetails.phone}`
    // li.id=userDetails.id

    const deletebtn=document.createElement("button")
    const deletevalue=document.createTextNode("Delete")
    deletebtn.appendChild(deletevalue)
    deletebtn.className="delete-btn"
    li.appendChild(deletebtn)
    // deletebtn.addEventListener("click",()=>deleteData(userDetails.id,li))

    const editbtn=document.createElement("button")
    const editvalue=document.createTextNode("Edit")
    editbtn.appendChild(editvalue)
    editbtn.className="edit-btn"
    li.appendChild(editbtn)
    // editbtn.addEventListener("click",()=>editData(userDetails))

    ul.appendChild(li)
}

