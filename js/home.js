const addMoneyBtn = document.getElementById('add-money-btn').addEventListener('click', function(){
  const add =   document.getElementById('add');
    add.classList.remove('hidden')
    const cashOut =   document.getElementById('cash-out');
  cashOut.classList.add('hidden')
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
  const cashOut =   document.getElementById('cash-out');
  cashOut.classList.remove('hidden')

    const add =   document.getElementById('add');
    add.classList.add('hidden')
})


document.getElementById('add-money-payoo-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInputField = document.getElementById('add-money-field').value;
    const addMoneyPinInputField = document.getElementById('add-money-pin-field').value;
    const currentBalance = document.getElementById('available-balace');
    const currentBalanceText = currentBalance.innerText;
    
    if( addMoneyPinInputField === '2222'){
        const newBalance = parseFloat(currentBalanceText) + parseFloat(addMoneyInputField);
        currentBalance.innerText = newBalance
        document.getElementById('add-money-field').value = '';
        document.getElementById('add-money-pin-field').value = "";
    }
    else{
        console.log('fail!!! , Try again')
    }
})


// cash out-------------------

document.getElementById('cash-out-payoo-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutInputField = document.getElementById('cash-out-field').value;
    const cashOutPinInputField = document.getElementById('cash-out-pin-field').value;
    const currentBalance = document.getElementById('available-balace');
    const currentBalanceText = currentBalance.innerText;

    if(cashOutPinInputField === '2222'){
        const newBalance = parseFloat(currentBalanceText) - parseFloat(cashOutInputField);
        currentBalance.innerText = newBalance;

        document.getElementById('cash-out-field').value = '';
        document.getElementById('cash-out-pin-field').value = "";
    }
    else{
        alert('try again Now')
    }
})