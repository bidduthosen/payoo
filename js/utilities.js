function getSectionValue(id){
    document.getElementById('add').classList.add('hidden')
    document.getElementById('cash-out').classList.add('hidden')
    document.getElementById('transactions-form').classList.add('hidden');

    // remove class in id

    document.getElementById(id).classList.remove('hidden');
}