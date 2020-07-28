window.onload = function(){
    let abracadabra = document.getElementById('abracadabra')
    abracadabra.addEventListener('click', function(){
        let nombre = prompt('Ingresa tu nombre')
        let titular = document.getElementById('titular')
    titular.innerHTML = `Hi. I'm ` + nombre
    })

    function colorAlAzar(){
        let colors = ['red', 'yellow', 'green', 'blue', 'orange']
        let color = Math.floor(Math.random()*5)
        return colors[color]
    }
    let touch_button = document.querySelector('#touch_button')
    touch_button.addEventListener('dblclick', function(){
        document.querySelector('.parrafo-color').style.color = colorAlAzar()
    })
    let sections = document.getElementsByTagName('section')
    Array.from(sections).forEach(section => {
        section.addEventListener('click', function(){
            alert('Clickeaste sobre ' + this.querySelector('h3').innerHTML)
        })
    })
    let portfolio = document.getElementById('button_portfolio')
    portfolio.addEventListener('mouseover', function(){
        this.previousElementSibling.style.color = colorAlAzar()
        console.log(this)
    })
}