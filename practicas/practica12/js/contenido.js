
const contenido = document.getElementById('contenido');

fetch('pizzas.html')
    .then(response => {
        console.log('Response:', response);
        return response.text();
    }
    )
    .then(data => {
        contenido.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching menu:', error);
    });

