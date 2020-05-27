var name1 = null
var nameError = null
var lastname = null
var lastnameError = null
var email = null
var emailError = null
var age = null
var ageError = null
var gender = null
var topicArray = new Array()
var topicError = null
var country = null
var comments = null
var commentsError = null
var sendBtn = null
var radios = null

var sendForm = function (evt) {
    evt.preventDefault()
    if (name1.value.length < 3) {
        nameError.innerHTML = 'El nombre debe tener al menos 3 caracteres'
        console.log(name1.value)
    } else {
        nameError.innerHTML = ''
        console.log(name1.value)
    }

    if (lastname.value.length < 3) {
        lastnameError.innerHTML = 'El apellido debe tener al menos 3 caracteres'
        console.log(lastname.value)
    } else {
        lastnameError.innerHTML = ''
        console.log(lastname.value)
    }

    if (validateEmail(email.value) == false) {
        emailError.innerHTML = 'Email inválido'
        console.log(email.value)
    } else {
        emailError.innerHTML = ''
        console.log(email.value)
    }

    if (age.value > 100 || age.value < 1) {
        ageError.innerHTML = 'Edad incorrecta'
        console.log(age.value)
    } else {
        ageError.innerHTML = ''
        console.log(age.value)
    }

    console.log(getRadioButtonSelectedValue(document.form1.gender))

    if (getCheckBoxSelectedValues(document.form1.topic) == false) {
        topicError.innerHTML = 'Seleccione al menos un tema de interes'
    } else {
        topicError.innerHTML = ''
        console.log(getCheckBoxSelectedValues(document.form1.topic))
    }

    if (country.value != null) {
        console.log(country.value)
    }

    if (comments.value.length < 3) {
        commentsError.innerHTML = 'Ingrese comentario'
        console.log(comments.value)
    } else {
        commentsError.innerHTML = ''
        console.log(comments.value)
    }

    return false
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getRadioButtonSelectedValue(ctrl) {
    for (i = 0; i < ctrl.length; i++)
        if (ctrl[i].checked) return ctrl[i].value;
}

function getCheckBoxSelectedValues(ctrl) {
    topicArray = []
    for (i = 0; i < ctrl.length; i++) {
        if (ctrl[i].checked) {
            topicArray[i] = ctrl[i].value
        }
    }
    return topicArray
}


window.onload = function () {
    name1 = document.getElementById('name')

    lastname = document.getElementById('lastname')

    email = document.getElementById('email')

    age = document.getElementById('age')

    gender = document.getElementById('gender')

    topic = document.getElementById('topic')

    country = document.getElementById('country')

    comments = document.getElementById('comments')

    sendBtn = document.getElementById('send')
    sendBtn.onclick = sendForm

    nameError = document.getElementById('nameError')

    lastnameError = document.getElementById('lastnameError')

    emailError = document.getElementById('emailError')

    ageError = document.getElementById('ageError')

    topicError = document.getElementById('topicError')

    commentsError = document.getElementById('commentsError')
}

