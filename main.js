const Form = document.getElementById('myForm')
const btn = document.getElementById('myBtn')
const users = document.getElementById('user')
const myItem = document.getElementById('item')
const msg = document.getElementById('Msg')
const msg2 = document.getElementById('Msg2')
const inputText = document.getElementById('text')
const inputEmail = document.getElementById('email')


Form.addEventListener('submit', function (e) {
    e.preventDefault()

    const myText = inputText.value
    const myEmail = inputEmail.value

    if (myText == '' || myEmail == '') {
        showErrorMessage('Please Enter all values!')
        return
    }
    else {
        showRightMessage('The message is sent successfully')

        users.innerHTML += `<li id="item"><b> The email: </b> ${myEmail} <br> <b> Your message:</b> ${myText} </li>`
        inputText.value = ''
        inputEmail.value = ''

    }


    function showErrorMessage(message) {
        msg.innerHTML += message
        msg.classList.add('error')


        setTimeout(() => {
            msg.classList.remove('error')
            msg.innerHTML = ''
        }, 2000);
    }

    function showRightMessage(message2) {
        msg2.innerHTML += message2
        msg2.classList.add('right')
        alert ('email is sent successfully');

        setTimeout(() => {
            msg2.classList.remove('right')
            msg2.innerHTML = ''
        }, 2000);
    }
})





function sendemail(){
    const messageParams ={
        email : document.getElementById('email').value,
        message : document.getElementById('text').value

    };
    emailjs.send('service_qyvcpru' ,'template_fdxn1ui',messageParams)
    .then(function (response){
        console.log('success', response.status, response.text);
        document.getElementById('myForm').reset();
       
    }
    )
}




  