function handleFormSubmit(event){
   event.preventDefault();
   const username=event.target.username.value
   const email=event.target.username.email
   const phone=event.target.username.phone

   localStorage.setItem("username",username)
   localStorage.setItem("email",email)
   localStorage.setItem("phone",phone)


}