
const piedepagina = document.getElementById('piedepagina');

fetch('piedepagina.html')
    .then(response => {
        console.log('Response:', response);
        return response.text();
    }
    )
    .then(data => {
        piedepagina.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching menu:', error);
    });

