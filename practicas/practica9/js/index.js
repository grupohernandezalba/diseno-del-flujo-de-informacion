    //alert('Se esta ejecutando JS');

    let numero1 = document.getElementById('numero1');
    let numero2 = document.getElementById('numero2');
    let resultado = document.getElementById('resultado');

    //numero1.value = 35.3;
    //numero2.value = 23.8;
    //resultado.value = parseFloat(numero1.value) + parseFloat(numero2.value);

    let btnSumar = document.getElementById('btnSumar');

    btnSumar.addEventListener("click", function(event) {
        event.preventDefault();
        resultado.value = parseFloat(numero1.value) + parseFloat(numero2.value);
    });


    let btnMultiplicar = document.getElementById('btnMultiplicar');

    btnMultiplicar.addEventListener("click", function(event) {
        event.preventDefault();
        resultado.value = parseFloat(numero1.value) * parseFloat(numero2.value);
    });

    // agregar la division, agregar la resta

