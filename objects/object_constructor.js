function details(firstName,lastName,age,occupation){
    this.firstName=firstName,
    this.lastName=lastName,
    this.age=age,
    this.occupation=occupation
}

const Person1=new details("Henry","Kevinson",65,"Retired officer");
const Person2=new details("Jenny","Kevinson",60,"Retired teacher");

console.log(Person2)

function changeName(person){
    person.lastName="Harbour"
}
changeName(Person2)
console.log(Person2)