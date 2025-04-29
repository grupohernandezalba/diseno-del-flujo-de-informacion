
const carrusel = document.getElementById('carrusel');

fetch('carrusel.html')
    .then(response => {
        console.log('Response:', response);
        return response.text();
    }
    )
    .then(data => {
        carrusel.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching menu:', error);
    });

