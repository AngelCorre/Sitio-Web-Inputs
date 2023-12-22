'use strict'

function respuestas() {
    
    let combo1 = document.getElementById("q1").value;
    
    let combo2 = document.getElementById("q2").value;
    
    let combo3 = document.getElementById("q3").value;
    
    let combo4 = document.getElementById("q4").value;
    
    let combo5 = document.getElementById("q5").value;
    
    let combo6 = document.getElementById("q6").value;
    
    let combo7 = document.getElementById("q7").value;
    
    let combo8 = document.getElementById("q8").value;
    
    let combo9 = document.getElementById("q9").value;
    
    let combo10 = document.getElementById("q10").value;
    
    let resultado = parseInt(combo1) + parseInt(combo2) + parseInt(combo3) + parseInt(combo4) +  parseInt(combo5) +
    parseInt(combo6) + parseInt(combo7) + parseInt(combo8) + parseInt(combo9) + parseInt(combo10);
    
    if (isNaN(resultado)) {
        
        alert("¡Responde todas las preguntas!");
        
    } else {
        
        Marcar(combo1, pregunta_1, retroalimentacion_1);
        Marcar(combo2, pregunta_2, retroalimentacion_2);
        Marcar(combo3, pregunta_3, retroalimentacion_3);
        Marcar(combo4, pregunta_4, retroalimentacion_4);
        Marcar(combo5, pregunta_5, retroalimentacion_5);
        Marcar(combo6, pregunta_6, retroalimentacion_6);
        Marcar(combo7, pregunta_7, retroalimentacion_7);
        Marcar(combo8, pregunta_8, retroalimentacion_8);
        Marcar(combo9, pregunta_9, retroalimentacion_9);
        Marcar(combo10, pregunta_10, retroalimentacion_10);
        
        word_1.innerHTML = "Bruselas, es la capital del país denominado Bélgica"
        word_2.innerHTML = "La capital de Argentina es Buenos Aires";
        word_3.innerHTML = "San Juan es la capital de Puerto Rico";
        word_4.innerHTML = "La capital de Venezuela es Caracas";
        word_5.innerHTML = "Brasilia, es la capital del país Brasil";
        word_6.innerHTML = "La capital de Perú es Lima";
        word_7.innerHTML = "Puerto España es la capital de Trinidad y Tobago";
        word_8.innerHTML = "Cuba, país cuya capital es La habana";
        word_9.innerHTML = "Managua, es la capital que pertenece a Nicaragua";
        word_10.innerHTML = "Ecuador, tiene como capital Quito";
        
        parrafoR.innerHTML = resultado + " / 10";
        
    }
    
}


function Marcar(combo, pregunta, retroalimentacion) {
    
    if (combo == 1) {
        
        retroalimentacion.innerHTML = "  -  Felicidades";
        pregunta.innerHTML = "CORRECTO";
        pregunta.style.backgroundColor = "green";
        pregunta.style.color = "white";
        pregunta.style.borderRadius = "5px";
        pregunta.style.padding = "10px";
        
    } else {
        
        retroalimentacion.innerHTML = "  -  Recuerda investigar un poco";
        pregunta.innerHTML = "INCORRECTO";
        pregunta.style.backgroundColor = "red";
        pregunta.style.color = "white";
        pregunta.style.borderRadius = "5px";
        pregunta.style.padding = "10px";
        
    }
    
}

function btnLimpiar() {
    
    let combo1 = document.getElementById("q1");
    
    let combo2 = document.getElementById("q2");
    
    let combo3 = document.getElementById("q3");
    
    let combo4 = document.getElementById("q4");
    
    let combo5 = document.getElementById("q5");
    
    let combo6 = document.getElementById("q6");
    
    let combo7 = document.getElementById("q7");
    
    let combo8 = document.getElementById("q8");
    
    let combo9 = document.getElementById("q9");
    
    let combo10 = document.getElementById("q10");
    
    limpiar(combo1, pregunta_1, retroalimentacion_1);
    limpiar(combo2, pregunta_2, retroalimentacion_2);
    limpiar(combo3, pregunta_3, retroalimentacion_3);
    limpiar(combo4, pregunta_4, retroalimentacion_4);
    limpiar(combo5, pregunta_5, retroalimentacion_5);
    limpiar(combo6, pregunta_6, retroalimentacion_6);
    limpiar(combo7, pregunta_7, retroalimentacion_7);
    limpiar(combo8, pregunta_8, retroalimentacion_8);
    limpiar(combo9, pregunta_9, retroalimentacion_9);
    limpiar(combo10, pregunta_10, retroalimentacion_10);
    
    word_1.innerHTML = "";
    word_2.innerHTML = "";
    word_3.innerHTML = "";
    word_4.innerHTML = "";
    word_5.innerHTML = "";
    word_6.innerHTML = "";
    word_7.innerHTML = "";
    word_8.innerHTML = "";
    word_9.innerHTML = "";
    word_10.innerHTML = "";
    
}

function limpiar(combo, pregunta, retroalimentacion) {
    
    retroalimentacion.innerHTML = ""
    parrafoR.innerHTML = "";
    combo.selectedIndex = 0;
    pregunta.innerHTML = "";
    pregunta.style.backgroundColor = "white";
    pregunta.style.color = "white";
    
}



