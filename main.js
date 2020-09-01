console.log('It works')
$(document).ready (function (){
$('#submit').click(function(event){
    event.preventDefault()
    console.log('clicked button')

    var email = $('#email').val()
    var name = $('#name').val()
    var phone = $('#phone').val()
    var message = $('#message').val()
    var statusEle = $('#status')
    statusEle.empty()

    if(email.length >5 && email.includes('@') && email.includes('.') ){
        statusEle.append('<div>Email is valid</div>')
    }else{
        event.preventDefault()
        statusEle.append('<div>Email is not valid</div>')
    }

    if(name.length >=1){
        statusEle.append('<div>Name is valid</div>')
    }else{
        event.preventDefault()
        statusEle.append('<div>Name is not valid</div>')
    }
    if(phone.length >=7){
        statusEle.append('<div>Phone is valid</div>')
    }else{
        event.preventDefault()
        statusEle.append('<div>Phone is not valid</div>')
    }
    if(message.length >10){
        statusEle.append('<div>Message is valid</div>')
    }else{
        event.preventDefault()
        statusEle.append('<div>Message is not valid</div>')
    }
})
})