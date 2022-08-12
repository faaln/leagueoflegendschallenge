function handleLoginIsAvailable() {
    const inputName = document.getElementById('username');
    const inputPassword = document.getElementById('password');
    const submitButton = document.getElementById('submit-button');

    if(inputName.value !== '' && inputPassword.value.length >=8) {
        submitButton.style.backgroundColor = '#FF002E';
        submitButton.style.cursor = 'pointer';
    } 

}

handleLoginIsAvailable()