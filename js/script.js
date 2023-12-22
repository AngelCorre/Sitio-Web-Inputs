
document.getElementById('ingrediente_24').addEventListener('click', () => {
    
    try {
        
        let valor = document.querySelector('input[name="grupo_7[]"]:checked').value;
        
        if (valor == 0) {
            
            document.getElementById('ingrediente_25').disabled = true;
            document.getElementById('ingrediente_26').disabled = true;
            document.getElementById('ingrediente_27').disabled = true;
            document.getElementById('ingrediente_28').disabled = true;
            
            document.getElementById('ingrediente_25').checked = false;
            document.getElementById('ingrediente_26').checked = false;
            document.getElementById('ingrediente_27').checked = false;   
            document.getElementById('ingrediente_28').checked = false;   
            
            
        } else {
            
            document.getElementById('ingrediente_25').disabled = false;
            document.getElementById('ingrediente_26').disabled = false;
            document.getElementById('ingrediente_27').disabled = false;
            document.getElementById('ingrediente_28').disabled = false;
            document.querySelector('input[name="grupo_7[]"]:checked').checked = false;
            
        }
        
    } catch (error) {
        
        document.getElementById('ingrediente_25').disabled = false;
        document.getElementById('ingrediente_26').disabled = false;
        document.getElementById('ingrediente_27').disabled = false;
        document.getElementById('ingrediente_28').disabled = false;

        console.log(error);
        
    }
    
});

document.getElementById('ingrediente_29').addEventListener('click', () => {
    
    try {
        
        let valor = document.querySelector('input[name="grupo_8[]"]:checked').value;
        
        if (valor == 0) {
            
            document.getElementById('ingrediente_30').disabled = true;
            document.getElementById('ingrediente_31').disabled = true;
            document.getElementById('ingrediente_32').disabled = true;
            
            document.getElementById('ingrediente_30').checked = false;
            document.getElementById('ingrediente_31').checked = false;
            document.getElementById('ingrediente_32').checked = false; 
            
            
        } else {
            
            document.getElementById('ingrediente_30').disabled = false;
            document.getElementById('ingrediente_31').disabled = false;
            document.getElementById('ingrediente_32').disabled = false;
            document.querySelector('input[name="grupo_8[]"]:checked').checked = false;
            
        }
        
    } catch (error) {
        
        document.getElementById('ingrediente_30').disabled = false;
        document.getElementById('ingrediente_31').disabled = false;
        document.getElementById('ingrediente_32').disabled = false;
        
    }
    
});


document.getElementById('cotizar').addEventListener('click', () => {
    
    
    try {
        
        let grupo_1 = document.getElementById('q1').value;
        let Sgrupo_1 = document.getElementById('q1');
        let pan = Sgrupo_1.options[Sgrupo_1.selectedIndex].text;
        
        let grupo_2 = document.querySelector('input[name="grupo_2"]:checked').value; // OBTENEMOS EL VALOR
        let IDgrupo_2 = document.querySelector('input[name="grupo_2"]:checked').id; // OBTENEMOS EL ID
        let Egrupo_2 = document.querySelector(`label[for=${IDgrupo_2}]`); // OBTENEMOS LA ETIQUETA LABEL
        let queso = Egrupo_2.innerHTML; // OBTENEMOS EL TEXTO DENTRO DEL LABEL
        
        let grupo_3 = document.querySelector('input[name="grupo_3"]:checked').value;
        let IDgrupo_3 = document.querySelector('input[name="grupo_3"]:checked').id;
        let Egrupo_3 = document.querySelector(`label[for=${IDgrupo_3}]`);
        let papas = Egrupo_3.innerHTML;
        
        
        let grupo_4 = document.querySelector('input[name="grupo_4"]:checked').value;
        let IDgrupo_4 = document.querySelector('input[name="grupo_4"]:checked').id;
        let Egrupo_4 = document.querySelector(`label[for=${IDgrupo_4}]`);
        let aderezo = Egrupo_4.innerHTML;
        
        let grupo_5 = document.querySelector('input[name="grupo_5"]:checked').value;
        let IDgrupo_5 = document.querySelector('input[name="grupo_5"]:checked').id;
        let Egrupo_5 = document.querySelector(`label[for=${IDgrupo_5}]`);
        let picante = Egrupo_5.innerHTML;
        
        let Nodegrupo_6 = document.querySelectorAll('input[name="grupo_6[]"]:checked');
        let grupo_6 = checkSuma(Nodegrupo_6);
        let carne = checkNombre(Nodegrupo_6);
        
        let Nodegrupo_7 = document.querySelectorAll('input[name="grupo_7[]"]:checked');
        let grupo_7 = checkSuma(Nodegrupo_7);
        let vegetal = checkNombre(Nodegrupo_7);
        
        let Nodegrupo_8 = document.querySelectorAll('input[name="grupo_8[]"]:checked');
        let grupo_8 = checkSuma(Nodegrupo_8);
        let extra = checkNombre(Nodegrupo_8);
        
        // console.log(Pgrupo_8);
        // console.log(grupo_8);
        // console.log(IDgrupo_8);
        // console.log(Egrupo_8);
        
        let subtotal = parseInt(grupo_1) + parseInt(grupo_2) + parseInt(grupo_3) + parseInt(grupo_4) + parseInt(grupo_5) + parseInt(grupo_6) +
        parseInt(grupo_7) + parseInt(grupo_8);
        
        if (isNaN(subtotal)) {

            alert("Selecciona una opción de cada grupo de ingredientes");
            
        } else {
            
            let iva = subtotal * (16/100).toFixed(4);
            
            let totalIva = subtotal + iva;
            
            cotizacion.innerHTML = `Has pedido una torta con ${pan}, ${queso}, ${papas},  ${aderezo}, ${picante} ${carne} ${vegetal} y ${extra}`;
            Ssubtotal.innerHTML = `Subtotal: $${subtotal}`;
            Siva.innerHTML = `IVA: $${iva}`;
            total.innerHTML = `Total: $${totalIva}`;

            panSelec.innerHTML = `${pan}`;
            quesoSelec.innerHTML = `${queso}`;
            papaSelec.innerHTML = `${papas}`;
            aderezoSelec.innerHTML = `${aderezo}`;
            picanteSelec.innerHTML = `${picante}`;
            carneSelec.innerHTML = `${carne}`;
            vegetalSelec.innerHTML = `${vegetal}`;
            extraSelec.innerHTML = `${extra}`;

            // cotizacion.innerHTML = "Has pedido una torta con un " + "PAN" + " con " + "ADEREZO" + " con " + "CARNE" +  " con " + "VEGETALES" + " con " +
            // "PICANTE" + " y " + "EXTRAS <br> Subtotal: " + total + " <br> <strong>IVA:</strong> " + iva + "<br> <strong>Total:</strong> " + totalIva;
            
            
        }
        
    } catch (error) {
        
        alert("Selecciona una opción de cada grupo de ingredientes");
        console.log(error);
        
    }
    
});

function checkSuma(checkNode) {

    // let suma = 0;

    // for (let i = 0; i < checkNode.length; i++) {
        
    //     suma = suma + parseInt(checkNode[i].value);
        
    // }

    // console.log(suma);

    // return suma;
    
    //if (checkNode.length >= 1) {
        
        let suma = true;

        console.log(suma);
        
        for (let i = 0; i < checkNode.length; i++) {
            
            suma = suma + parseInt(checkNode[i].value);
            
        }

        if (isNaN(suma)) {

            console.log("Selecciona una opción de cada grupo de ingredientes");
            
        } else {

            return suma;

        }

        
    // } else {
        
    //     return checkNode[0].value;
        
    // }
    
}

function checkNombre(checkNode) {
    
    // let Id;
    // let texto = "";

    // for (let i = 0; i < checkNode.length; i++) {

    //     Id = checkNode[i].id;
    //     let ingrediente =  document.querySelector(`label[for=${Id}]`).innerHTML;
            
    //     texto = `${texto}, ${ingrediente} `;

    // }

    // console.log(texto);

    // return texto;

    //if (checkNode.length >= 1) {
        
        let Id;
        let texto = "";
        
        for (let i = 0; i < checkNode.length; i++) {
            
            Id = checkNode[i].id;
            let ingrediente =  document.querySelector(`label[for=${Id}]`).innerHTML;
            
            texto = `${texto}, ${ingrediente} `;

            
        }
        
        return texto;
        
    // } else {
        
    //     Id = checkNode[0].id;
    //     let ingrediente =  document.querySelector(`label[for=${Id}]`).innerHTML;
        
    //     return `con ${ingrediente}`;
        
    // }
    
}



document.getElementById('limpiar_t').addEventListener('click', () => {
    
    let grupo_1 = document.querySelector('input[name="grupo_1"]:checked');
    let grupo_2 = document.querySelector('input[name="grupo_2"]:checked');
    let grupo_3 = document.querySelector('input[name="grupo_3"]:checked');
    let grupo_4 = document.querySelector('input[name="grupo_4"]:checked');
    let grupo_5 = document.querySelector('input[name="grupo_5"]:checked');
    let grupo_6 = document.querySelector('input[name="grupo_6[]"]:checked');
    let grupo_7 = document.querySelector('input[name="grupo_7[]"]:checked');
    let grupo_8 = document.querySelector('input[name="grupo_8[]"]:checked');
    
    reset('grupo_1');
    reset('grupo_2');
    reset('grupo_3');
    reset('grupo_4');
    reset('grupo_5');
    reset('grupo_6[]');
    reset('grupo_7[]');
    reset('grupo_8[]');
    
    cotizacion.innerHTML = "";
    q1.selectedIndex = "";
    Ssubtotal.innerHTML = "";
    Siva.innerHTML = "";
    total.innerHTML = "";
    
});

function reset(groupName) { // FUNCION PARA LIMPIAR
    
    let name = document.getElementsByName(groupName);
    
    for (let i = 0; i < name.length; i++) {
        let element = name[i];
        element.checked = false;
    }
    
    document.getElementById('ingrediente_25').disabled = false;
    document.getElementById('ingrediente_26').disabled = false;
    document.getElementById('ingrediente_27').disabled = false;
    document.getElementById('ingrediente_28').disabled = false;
    
}



