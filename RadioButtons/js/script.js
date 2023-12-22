
// document.getElementById('calificar').addEventListener('click', function() {

//     let grupo_1 = document.querySelector('input[name="grupo_1"]:checked').value;
//     let grupo_2 = document.querySelector('input[name="grupo_2"]:checked').value;
//     let grupo_3 = document.querySelector('input[name="grupo_3"]:checked').value;
//     let grupo_4 = document.querySelector('input[name="grupo_4"]:checked').value;
//     let grupo_5 = document.querySelector('input[name="grupo_5"]:checked').value;
//     let grupo_6 = document.querySelector('input[name="grupo_6"]:checked').value;
//     let grupo_7 = document.querySelector('input[name="grupo_7"]:checked').value;
//     let grupo_8 = document.querySelector('input[name="grupo_8"]:checked').value;
//     let grupo_9 = document.querySelector('input[name="grupo_9"]:checked').value;
//     let grupo_10 = document.querySelector('input[name="grupo_10"]:checked').value;

//     let resultado = parseInt(grupo_1) + parseInt(grupo_2) + parseInt(grupo_3) + parseInt(grupo_4) + parseInt(grupo_5) +
//      parseInt(grupo_6) + parseInt(grupo_7) + parseInt(grupo_8) + parseInt(grupo_9) + parseInt(grupo_10);

//      calificacion.innerText = resultado + ' / 10';

//     checked('grupo_1');
//     checked('grupo_2');
//     checked('grupo_3');
//     checked('grupo_4');
//     checked('grupo_5');
//     checked('grupo_6');
//     checked('grupo_7');
//     checked('grupo_8');
//     checked('grupo_9');
//     checked('grupo_10');



// });

function Calificar() { // FUNCION PARA CALIFICAR LAS PREGUNTAS
   
   try {
      
      let grupo_1 = document.querySelector('input[name="grupo_1"]:checked').value;
      let grupo_2 = document.querySelector('input[name="grupo_2"]:checked').value;
      let grupo_3 = document.querySelector('input[name="grupo_3"]:checked').value;
      let grupo_4 = document.querySelector('input[name="grupo_4"]:checked').value;
      let grupo_5 = document.querySelector('input[name="grupo_5"]:checked').value;
      let grupo_6 = document.querySelector('input[name="grupo_6"]:checked').value;
      let grupo_7 = document.querySelector('input[name="grupo_7"]:checked').value;
      let grupo_8 = document.querySelector('input[name="grupo_8"]:checked').value;
      let grupo_9 = document.querySelector('input[name="grupo_9"]:checked').value;
      let grupo_10 = document.querySelector('input[name="grupo_10"]:checked').value;
      
      let resultado = parseInt(grupo_1) + parseInt(grupo_2) + parseInt(grupo_3) + parseInt(grupo_4) + parseInt(grupo_5) +
      parseInt(grupo_6) + parseInt(grupo_7) + parseInt(grupo_8) + parseInt(grupo_9) + parseInt(grupo_10);
      
      calificacion.innerText = resultado + ' / 10';
      
      checked(grupo_1, pregunta_1);
      checked(grupo_2, pregunta_2);
      checked(grupo_3, pregunta_3);
      checked(grupo_4, pregunta_4);
      checked(grupo_5, pregunta_5);
      checked(grupo_6, pregunta_6);
      checked(grupo_7, pregunta_7);
      checked(grupo_8, pregunta_8);
      checked(grupo_9, pregunta_9);
      checked(grupo_10, pregunta_10);
      
      alerta(resultado);
      
   } catch (error) {

      alert("Answer all the questions, please!");
      console.log(error);
      
   }
   
}

function alerta (resultado) {
   
   if (resultado <= 6) {
      
      alert("Study Hard");
      
   } else if (resultado >= 7 || resultado <= 8) {
      
      alert("Great Job");
      
   } else if(resultado > 8) {
      
      alert("Perfect");
      
   }
   
}

function btnLimpiar() { //FUNCION QUE LLAMA A LA FUNCION CON EL CODIGO PARA LIMPIAR
   
   reset('grupo_1', pregunta_1);
   reset('grupo_2', pregunta_2);
   reset('grupo_3', pregunta_3);
   reset('grupo_4', pregunta_4);
   reset('grupo_5', pregunta_5);
   reset('grupo_6', pregunta_6);
   reset('grupo_7', pregunta_7);
   reset('grupo_8', pregunta_8);
   reset('grupo_9', pregunta_9);
   reset('grupo_10', pregunta_10);
   
   document.getElementById('calificacion').innerText = "";
   
   //  cleanQuestion(pregunta_1);
   //  cleanQuestion(pregunta_2);
   //  cleanQuestion(pregunta_3);
   //  cleanQuestion(pregunta_4);
   //  cleanQuestion(pregunta_5);
   //  cleanQuestion(pregunta_6);
   //  cleanQuestion(pregunta_7);
   //  cleanQuestion(pregunta_8);
   //  cleanQuestion(pregunta_9);
   //  cleanQuestion(pregunta_10);
   
   
}

function reset(groupName, question) { // FUNCION PARA LIMPIAR
   
   let name = document.getElementsByName(groupName);
   
   for (let i = 0; i < name.length; i++) {
      let element = name[i];
      element.checked = false;
   }
   
   question.innerText = ""
   question.style.backgroundColor = "white";
   
   
   
}


function checked(groupName, question) { // FUNCION IMPRIMIR MENSAJE DE RESPUESTA CORRECTA Y INCORRECTA
   
   if (parseInt(groupName) == 1) {
      
      question.innerText = " CORRECT"
      question.style.backgroundColor = "green";
      question.style.padding = "10px"
      question.style.color = "white"
      question.style.borderRadius = "5px"
      
   } else {
      
      question.innerText = " INCORRECT"
      question.style.backgroundColor = "red";
      question.style.padding = "10px"
      question.style.color = "white"
      question.style.borderRadius = "5px"
      
   }
   
}

//  function cleanQuestion(question) { // FUNCION PARA LIMPIAR LOS MENSAJES DE RESPUESTA CORRECTA Y INCORRECTA

//     question.innerText = ""
//     question.style.backgroundColor = "white";

//  }

