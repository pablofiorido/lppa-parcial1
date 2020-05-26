var name1 = null
var nameError = null
var lastname = null
var lastnameError = null
var email = null
var emailError = null
var age = null
var ageError = null
var gender = null
var genderError = null
var topic = null
var topicError = null
var country = null
var countryError = null
var sendBtn = null

var handleInputChange = function (evt) {
    console.log(name1.value)
    console.log(lastname.value)
}

var sendForm = function (evt) {
    evt.preventDefault()
    if (name1.value.length < 3) {
        nameError.innerHTML = 'El nombre debe tener al menos 3 caracteres'
    } else {
        nameError.innerHTML = ''
    }

    if (lastname.value.length < 3) {
        lastnameError.innerHTML = 'El apellido debe tener al menos 3 caracteres'
    } else {
        lastnameError.innerHTML = ''
    }

    if (email.value.length < 3) {
        emailError.innerHTML = 'El email no esta escrito correctamente'
    } else {
        emailError.innerHTML = ''
    }

    if (age.value < 1 && age.value > 99) {
        ageError.innerHTML = 'Edad incorrecta'
    } else {
        ageError.innerHTML = ''
    }

    return false
}

window.onload = function () {
    name1 = document.getElementById('name')
    name1.onchange = handleInputChange

    lastname = document.getElementById('lastname')
    lastname.onchange = handleInputChange

    email = document.getElementById('email')
    email.onchange = handleInputChange

    age = document.getElementById('age')
    age.onchange = handleInputChange

    sendBtn = document.getElementById('send')
    sendBtn.onclick = sendForm

    nameError = document.getElementById('nameError')

    lastnameError = document.getElementById('lastnameError')

    emailError = document.getElementById('emailError')

    ageError = document.getElementById('ageError')

}
