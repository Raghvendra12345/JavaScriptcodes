window.addEventListener("DOMContentLoaded",initialize)

//when page get loads display all users
function initialize(){
   const usersList=JSON.parse(localStorage.getItem("usersList")) || [];

   for(let i=0;i<usersList.length;i++){
     display(usersList[i])
   }
   sessionStorage.removeItem("editId")
}

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
    const usersList=JSON.parse(localStorage.getItem("usersList")) || [];
    const editId=sessionStorage.getItem("editId")

    if(editId){
          update(usersList,editId,userDetails)
    }
    else add(usersList,userDetails)

    localStorage.setItem("usersList",JSON.stringify(usersList))
}

function add(usersList,userDetails){
    userDetails.id=Date.now()
    usersList.push(userDetails)
    display(userDetails)
}

function display(userDetails){
    const ul=document.querySelector("ul")
    const li=document.createElement('li')
    li.textContent=`${userDetails.username} ${userDetails.email} ${userDetails.phone}`
    li.id=userDetails.id

    const deletebtn=document.createElement("button")
    const deletevalue=document.createTextNode("Delete")
    deletebtn.appendChild(deletevalue)
    deletebtn.className="delete-btn"
    li.appendChild(deletebtn)
    deletebtn.addEventListener("click",()=>deleteData(userDetails.id,li))

    const editbtn=document.createElement("button")
    const editvalue=document.createTextNode("Edit")
    editbtn.appendChild(editvalue)
    editbtn.className="edit-btn"
    li.appendChild(editbtn)
    editbtn.addEventListener("click",()=>editData(userDetails))

    ul.appendChild(li)
}

function deleteData(id,li){
    const usersList=JSON.parse(localStorage.getItem("usersList"));
    let updatedUsersList=[];
    for(const user of usersList){
        if(user.id!=id){
            updatedUsersList.push(user)
        }
    }
    localStorage.setItem("usersList",JSON.stringify(updatedUsersList))
    li.remove()
}

function editData(data){
    const usernameInput=document.querySelector("#username")
    const emailInput=document.querySelector("#email")
    const phoneInput=document.querySelector("#phone")

    usernameInput.value=data.username
    emailInput.value=data.email
    phoneInput.value=data.phone

    sessionStorage.setItem("editId",data.id)

    const submitbtn=document.querySelector("button[type=submit]")
    submitbtn.textContent="Update"
}

function update(usersList,editId,userDetails){
    for(let i=0;i<usersList.length;i++){
        if(usersList[i].id==editId){
            usersList[i].username=userDetails.username
            usersList[i].email=userDetails.email
            usersList[i].phone=userDetails.phone
        }
    }
    const li=document.getElementById(editId)
    li.firstChild.textContent=userDetails.username+" "+userDetails.email+" "+userDetails.phone
    sessionStorage.removeItem("editId")

     const submitbtn=document.querySelector("button[type=submit]")
    submitbtn.textContent="Submit"
}