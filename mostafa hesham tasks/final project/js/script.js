var myForm = document.getElementById("form")
var Name = document.getElementById("Name")
var Email = document.getElementById("Email")
var Phone = document.getElementById("Phone")
var password = document.getElementById("password")
var nameMassageEroor = "less than 3 chracter"
var emailMassageEroor = "Please Enter Valide Email"
var phoneMassageEroor = "Please Enter Valide Phone"
var passwordMassageEroor = "Please Enter 1 capital character , 1 small character, 1 spical character , 1  number and 8chracter"
Name.addEventListener("input", function () {

    var textName = Name.value.trim()
    if (textName.length <= 3) {
        showErrorMassage(Name, nameMassageEroor)
    }
    else removeErrorMassage(Name)
})
Email.addEventListener("input", function (e) {
    var textEmail = Email.value.trim()
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var EmailReg = reg.test(textEmail)
    if (EmailReg == false) {
        showErrorMassage(Email, emailMassageEroor)

    }
    else removeErrorMassage(Email)
})
Phone.addEventListener("input", function () {

    var textphone = Phone.value.trim()
    var reg = /^\d{11}$/
    var phoneReg = reg.test(textphone)
    if (phoneReg == false) showErrorMassage(Phone, phoneMassageEroor)
    else removeErrorMassage(Phone)
})
password.addEventListener("input", function () {

    var textpassword = password.value.trim()
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
    var passwordReg = reg.test(textpassword)
    if (passwordReg == false) showErrorMassage(password, passwordMassageEroor)
    else removeErrorMassage(password)
})


function showErrorMassage(input, massage) {
    input.nextElementSibling.innerText = massage
    input.classList.add("validation")
}
function removeErrorMassage(input) {
    input.nextElementSibling.innerText = "good"
    input.classList.remove("validation")

}

myForm.addEventListener("submit", function (e) {
    if (Name.value == "") { showErrorMassage(Name ,nameMassageEroor)
        e.preventDefault()
   
    
    }  
    
    
    if (Phone.value == ""){

        showErrorMassage(Phone ,phoneMassageEroor)  
           e.preventDefault()
    } 


    if (Email.value == ""){

        showErrorMassage(Email ,emailMassageEroor)
            e.preventDefault()
    } 

    if (password.value == ""){

        showErrorMassage(password ,passwordMassageEroor)
           e.preventDefault()
    }
    // if (password.nextElementSibling.innerText == passwordMassageEroor)


   






})