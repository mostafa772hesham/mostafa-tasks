var useres =[]
function adduser(){

    var user ={
    id : prompt("enter your id"),
    Name : prompt("enter your name"),
    balance : prompt("enter your balance")
    }
    useres.push(user) 
}
function editBalanceByID(){

     var   newid = prompt("enter your id you want modify")
     var   newbalance = prompt("enter yournew balance")
    
     var mid= useres.findIndex(user=>user.id ==newid)
     useres[mid].balance =newbalance
}
function deletUser(){

    var   delid = prompt("enter your id you want delet")
   
    var mid= useres.findIndex(user=>user.id ==delid)
    
    useres.splice(mid , 1)
}


adduser()
adduser()
adduser()
editBalanceByID()
deletUser()
console.log(useres)
