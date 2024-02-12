function addValue(){

    const _inputID=document.getElementById('input-id')
    const _inputVal=_inputID.value
    const _inputHeader = document.getElementById('input-header')


    _inputHeader.innerHTML = _inputVal

    localStorage.setItem('inputValue',_inputVal)
}

function showValue(){

    const _inputHeader = document.getElementById('input-header')
    const _inputGet = localStorage.getItem('inputValue')

    _inputHeader.innerHTML=  _inputGet??''
}

function deleteValue(){

    const _inputID=document.getElementById('input-id')
    const _inputVal=_inputID.value
    const _inputHeader=document.getElementById('input-header')
    const _delButton = document.getElementById('delButton')

    localStorage.removeItem('inputValue')
    _inputHeader.innerHTML= ''
}

showValue()