console.log('Hola menu');
const menu = document.getElementById('menu');

fetch('menu.html')
    .then(response => {
        console.log('Response:', response);
        return response.text();
    }
    )
    .then(data => {
        menu.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching menu:', error);
    });

