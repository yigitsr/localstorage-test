const _div = document.getElementById('div-id')
_div.innerHTML = 'Name: ' + person.age + '</br>' + 'Job: ' + person.job + '</br>' + 'Hobby: ' + person.hobby

function createPerson(){
    let _div = document.querySelector('.personDiv')
    if(!_div){
        _div = document.createElement('div')
        _div.className = 'personDiv'
        _div.innerHTML = 'Name: ' + person.age + '</br>' + 'Job: ' + person.job + '</br>' + 'Hobby: ' + person.hobby
        document.documentElement.prepend(_div)
    }
}