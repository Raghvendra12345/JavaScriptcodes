
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
    

    const deletebtn=document.createElement("button")
    const deletevalue=document.createTextNode("Delete")
    deletebtn.appendChild(deletevalue)
    deletebtn.className="delete-btn"
    li.appendChild(deletebtn)

    const editbtn=document.createElement("button")
    const editvalue=document.createTextNode("Edit")
    editbtn.appendChild(editvalue)
    editbtn.className="edit-btn"
    li.appendChild(editbtn)

    ul.appendChild(li)
}
