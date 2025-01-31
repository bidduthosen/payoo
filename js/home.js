// Taggle button add money and cash Out --------

// document.getElementById('add-money-btn').addEventListener('click', function(){
//     document.getElementById('add').classList.remove('hidden');
//     document.getElementById('cash-out').classList.add('hidden')
// });
// document.getElementById('cash-out-btn').addEventListener('click', function(){
//     document.getElementById('cash-out').classList.remove('hidden');
//     document.getElementById('add').classList.add('hidden');
// })

// --------------------------------------

document.getElementById('add-money-payoo-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInputField = document.getElementById('add-money-field').value;
    const addMoneyPinInputField = document.getElementById('add-money-pin-field').value;
    const currentBalance = document.getElementById('available-balace');
    const currentBalanceText = currentBalance.innerText;
    
    if( addMoneyPinInputField === '2222'){
        const newBalance = parseFloat(currentBalanceText) + parseFloat(addMoneyInputField);
        console.log(typeof parseFloat(addMoneyInputField))
        if(isNaN(parseFloat(addMoneyInputField))){
            alert('provite a number');
            return;
        }

        currentBalance.innerText = newBalance;
        const transactionHistory = document.getElementById('transaction-section');
        const p = document.createElement('p');
        p.innerHTML = `Add money Balance: ${newBalance} tk`;
        p.classList.add('bg-purple-400', 'p-2', 'rounded-xl', 'm-2')
        transactionHistory.appendChild(p);

        document.getElementById('add-money-field').value = '';
        document.getElementById('add-money-pin-field').value = "";
    }
    else{
        alert('fail!!! , Try again')
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

        const transactionHistory = document.getElementById('transaction-section');
        const p = document.createElement('p');
        p.innerHTML = `Cash out${cashOutInputField} tk, Balance: ${newBalance} tk`;
        p.classList.add('bg-purple-400', 'p-2', 'rounded-xl', 'm-2')
        transactionHistory.appendChild(p);

        document.getElementById('cash-out-field').value = '';
        document.getElementById('cash-out-pin-field').value = "";
    }
    else{
        alert('try again Now')
    }
})