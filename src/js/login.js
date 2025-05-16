const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-in');

loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const inputs = loginForm.querySelectorAll('input.login__input');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert('Por favor completa todos los campos.');
    } else {
        window.location.href = 'https://frontend-two-omega-72.vercel.app/';
    }
});
