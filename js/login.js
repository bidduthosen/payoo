document.getElementById('login-payoo-btn').addEventListener('click', function(event){
    event.preventDefault();
    const numberInputField = document.getElementById('number-input-field').value;
    const pinInputField = document.getElementById('pin-input-field').value;

    if(numberInputField === '1111' && pinInputField === '2222'){
        window.location.href = 'Home.html'
    }
    else{
        alert('Plz try again')
    }
    document.getElementById('number-input-field').value= '';
    document.getElementById('pin-input-field').value = '';
})