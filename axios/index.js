const getBtn=document.getElementById("get-btn")
const postBtn=document.getElementById("post-btn")
const putBtn=document.getElementById("put-btn")
const deleteBtn=document.getElementById("delete-btn")

getBtn.addEventListener("click",getTodos)
postBtn.addEventListener("click",postTodos)
putBtn.addEventListener("click",putTodos)
deleteBtn.addEventListener("click",deleteTodos)

function getTodos(){
//    console.log("get")
    axios
    .get("https://crudcrud.com/api/bffd2ec81a164913b52012533eb98076/todo")
    //   .then((res)=>console.log(res))
    .then((res)=>console.log(res.data))
      .catch((err)=>console.log(err));
}
function postTodos(){
    // console.log("post")
    axios
    .post("https://crudcrud.com/api/bffd2ec81a164913b52012533eb98076/todo",{
        title:"Pick up car",
        completed:false,
      })
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));
}
function putTodos(){
    // console.log("put")
    axios
    .put("https://crudcrud.com/api/bffd2ec81a164913b52012533eb98076/todo/697479ebd19be803e8ace1b5",{
        title:"Buy Fruits",
        completed:true,
      })
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));
}
function deleteTodos(){
    // console.log("delete")
    axios
    .delete("https://crudcrud.com/api/bffd2ec81a164913b52012533eb98076/todo/69747d2fd19be803e8ace1b6")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}