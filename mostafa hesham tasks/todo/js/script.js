var myForm = document.getElementById('myForm')
var tasks = []
var taskCont = document.getElementById('taskContainer')

function addtask(Name , balance , id){
    var task = {
        Name : Name,
        balance : balance,
        id : id,
        satuts : true
    }
    tasks.push(task)
    console.table(tasks)
}


function showTasks(){
    taskCont.textContent = "";
    tasks.forEach((task , i)=>{
        var tr = document.createElement('tr')
        var tdn = document.createElement('td')
        tdn.textContent = task.Name
        var tdb = document.createElement('td')
        tdb.classList.add("balance")
        tdb.innerText = task.balance
        var tdid = document.createElement('td')
        tdid.innerText = task.id
        var editBalance = document.createElement('button')
        editBalance.textContent = "Edite Balance"
        var removeTask = document.createElement('button')
        removeTask.innerText = "Remove User" ;
      

        editBalance.classList.add('btn' , 'btn-edite' , 'me-3')
        removeTask.classList.add('btn' , 'btn-danger')
        tr.append(tdn)
        tr.append(tdb)
        tr.append(tdid)
        tr.append(editBalance)
        tr.append(removeTask)
        taskCont.append(tr)
        editBalance.addEventListener('click' , function(){
            console.log(i)
            
                        handleAction(i , true )
        })
        removeTask.addEventListener('click' , function(){
            // handleRemoveTask(i)
            handleAction(i , false )
        })
    })
}

function handleAction(index , flag ){
    if(flag == true){

        tasks[index].satuts = false;
        tasks[index].balance = prompt("enter your new balance");

    } 
    else if(flag == false) tasks.splice(index , 1)
    showTasks()
}


myForm.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e)
    console.log(e.target.elements.taskTitle.value)
    console.log(e.target.elements.balance.value)
    console.log(e.target.elements.taskId.value)
    addtask(e.target.elements.taskTitle.value , e.target.elements.balance.value ,e.target.elements.taskId.value)
    showTasks()
})

// 
