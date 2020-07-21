//Ale no se que pasó, no me toma nada desde que creo la <ol>
alert('Bienvenidos a mi sitio')
let avanzar = confirm('Está seguro que quiere avanzar?')
if (avanzar === false){
    document.querySelector('h2').innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
    
}else{
    document.querySelector('h2').innerHTML = "Qué alegría que quieras continuar con tu visita por este maravilloso sitio."
    let nombre = prompt('Ingresa tu nombre')
    let titulo = document.querySelector('h1')
    titulo.innerHTML = "Bienvenido " + nombre
    let edad = prompt('¿Cuántos años tenés?')   
    
    if (edad <= 18){
        document.getElementsByClassName('container-general')[0].style.display = 'none'
        document.getElementById('accesoDenegado').style.display = 'block'
    }
    let hobbies = prompt('Decinos tus hobbies separados por comas Ej: netflix,musica,etc')
    if (/programa[r|cioón]/gi.test(hobbies)){
        alert('Qué bueno que te gusta la programación')
    }else {
        alert('Qué lástima que no te guste la programación')
        document.querySelector('div.container.background-img').style.backgroundImage = 'url(img/gatito.jpeg)'
    }
    hobbies.split(',')
    articulo.innerHTML += '<ol>'
    let articulo = document.querySelector('article')
    for (let i=0; i< hobbies.length; i++) {
        if (hobbies.length == 3)break
        articulo.innerHTML += `<li>${hobbies[i]}</li>` 
    }
    articulo.innerHTML += '</ol>'            
    let colorPreferido = prompt('¿Cuál es tu color favorito?')
    console.log(colorPreferido)
    document.querySelector('span').innerHTML = nombre
}


