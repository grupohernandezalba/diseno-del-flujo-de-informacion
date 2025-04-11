console.log('Hola Mundo');
const menu = document.querySelector('#menu');

fetch('menu.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(codigoHtml) {
        menu.innerHTML = codigoHtml;    
        console.log('Menu cargado');
    })
    .catch(function(err) {  
        console.log('Fetch Error', err);  
    });