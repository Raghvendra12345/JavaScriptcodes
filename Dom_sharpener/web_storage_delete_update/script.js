// window.addEventListener("DOMContentLoaded", getUsersFromLocalStorage());
// function handleFormSubmit(event){
//    event.preventDefault();
//    const username=event.target.username.value
//    const email=event.target.email.value
//    const phone=event.target.phone.value

//    const userId=Date.now()
//    const obj={id:userId,
//     username,
//     email,
//     phone
//   };
//   let userList=JSON.parse(localStorage.getItem("userList")) || [];
//   userList.push(obj)
   
//    localStorage.setItem(userId,JSON.stringify(userList))

//    displayy(obj)
//    event.target.reset()  //clear form input after submit
// }
// function getUsersFromLocalStorage() {
//    const userList=JSON.parse(localStorage.getItem("userList")) || [];
//      userList.forEach(user=>displayy(user))
// }
// function displayy(obj){
//     const ul=document.querySelector('ul')
//     const li=document.createElement('li')

//     li.textContent=obj.username+" "+obj.email+" "+obj.phone

//     const deletebtn=document.createElement('button')
//     const deletevalue=document.createTextNode("Delete")
//     deletebtn.appendChild(deletevalue)
  
//     li.appendChild(deletebtn)
    
//     deletebtn.addEventListener("click",(event)=>deleteData(obj.id,li))
//     ul.appendChild(li)

// }
// function deleteData(id,li){
//     const userList=JSON.parse(localStorage.getItem("userList")) || [];
//     const updateUsersList=[]
//     for(let i=0;i<userList.length;i++){
//         if(userList[i].id!==userId){
//             updateUsersList.push(userList[i])
//         }
//     }
//     localStorage.setItem("userList",JSON.stringify(updateUsersList));
//     li.remove()
// }


window.addEventListener("DOMContentLoaded", getUsersFromLocalStorage());

function handleFormSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const userId = Date.now();

  const obj = {
    id: userId,
    username,
    email,
    phone
  };

  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  userList.push(obj);

  // ✅ save array
  localStorage.setItem("userList", JSON.stringify(userList));

  displayy(obj);
  event.target.reset();
}

function getUsersFromLocalStorage() {
  const userList = JSON.parse(localStorage.getItem("userList")) || [];
  userList.forEach(user => displayy(user));
}

function displayy(obj) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.textContent = `${obj.username} ${obj.email} ${obj.phone} `;

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";

  deletebtn.addEventListener("click", () => deleteData(obj.id, li));

  li.appendChild(deletebtn);
  ul.appendChild(li);
}

function deleteData(id, li) {
  let userList = JSON.parse(localStorage.getItem("userList")) || [];

  userList = userList.filter(user => user.id !== id);

  localStorage.setItem("userList", JSON.stringify(userList));
  li.remove();
}
