const nameField = document.querySelector("[name=user_name]");
const mailField = document.querySelector("[name=user_mail]");
const radioButton = document.querySelector("[name=consulta_tipo]");
const destinationField = document.querySelector("[name=destino]");
const messageField = document.querySelector("[name=message]");
const nextButton = document.getElementById("button-error");
var nameValid = 0;
var emailValid = 0;
var destinationValid = 0;
var messageValid = 0;
var radioValid = 0;

nameField.addEventListener("blur", function (evento) {
    const field = evento.target;
    const fieldValue = evento.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Ingrese un nombre valido";
        nameValid = 0;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        nameValid = 1;
    }
})
mailField.addEventListener("blur", function (evento) {
    const field = evento.target;
    const fieldValue = evento.target.value;
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(fieldValue))) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "No es una dirección de email correcta";
        emailValid = 0;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        emailValid = 1;
    }
})
function radioSelected () {
    var selected = false;
    for(var i = 0; i < radioButton.length; i++){
        if(radioButton[i].checked){
            selected = true;
            break;
        }
    }
    if(selected == false){
        return false;
    } else {
        return true;
    }
}
destinationField.addEventListener("blur", function (evento) {
    const field = evento.target;
    const fieldIndex = evento.target.selectedIndex;
    if (fieldIndex == "" || fieldIndex == null) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Seleccione un destino";
        destinationValid = 0;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        destinationValid = 1;
    }
})
messageField.addEventListener("blur", function (evento) {
    const field = evento.target;
    const fieldValue = evento.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Ingrese su mensaje de consulta";
        messageValid = 0;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        messageValid = 1;
    }
})

function validation() {
    if(nameValid == 1 && emailValid == 1 && radioSelected && destinationValid == 1 && messageValid == 1){
        return true;
    } else {
        nextButton.classList.add("error")
        nextButton.innerText = "Falta completar los siguientes campos: ";
        return false;
    }
}