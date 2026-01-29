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
    if(editId){
        axios.put(`https://crudcrud.com/api/22d5825df85f4029b1ee7d289b97c1e1/appointmentData/${editId}`,userDetails)

        .then(() => {
            const li = document.getElementById(editId);
            li.firstChild.textContent =
              `${userDetails.username} ${userDetails.email} ${userDetails.phone} `;

            editId = null;
            event.target.reset();
            document.querySelector("button[type=submit]").textContent = "Submit";
        })
        .catch(error => console.log(error));
    }
    
    else {
        axios.post("https://crudcrud.com/api/22d5825df85f4029b1ee7d289b97c1e1/appointmentData",userDetails)
    .then((response)=>{
        display(response.data)
        console.log(response)
    })
    .catch((error)=>console.log(error))
    }
}



function display(userDetails){
    const ul=document.querySelector("ul")
    const li=document.createElement('li')
    li.textContent=`${userDetails.username} ${userDetails.email} ${userDetails.phone}`
    li.id=userDetails._id

    const deletebtn=document.createElement("button")
    const deletevalue=document.createTextNode("Delete")
    deletebtn.appendChild(deletevalue)
    deletebtn.className="delete-btn"
    li.appendChild(deletebtn)
    deletebtn.addEventListener("click",()=>deleteData(userDetails._id,li))

    const editbtn=document.createElement("button")
    const editvalue=document.createTextNode("Edit")
    editbtn.appendChild(editvalue)
    editbtn.className="edit-btn"
    li.appendChild(editbtn)
    editbtn.addEventListener("click",()=>editData(userDetails))

    ul.appendChild(li)
}

function deleteData(id,li){
     axios.delete(`https://crudcrud.com/api/22d5825df85f4029b1ee7d289b97c1e1/appointmentData/${id}`)
     .then((response)=>{
        
       li.remove()
    })
    .catch((error)=>console.log(error))
}

function editData(data){
    const usernameInput=document.querySelector("#username")
    const emailInput=document.querySelector("#email")
    const phoneInput=document.querySelector("#phone")

    usernameInput.value=data.username
    emailInput.value=data.email
    phoneInput.value=data.phone

    editId = data._id;

    const submitbtn=document.querySelector("button[type=submit]")
    submitbtn.textContent="Update"
}

