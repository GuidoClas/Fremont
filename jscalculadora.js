var intimacionCompleta;

function calcularMora()
{
    var nombreCompleto;
    var deudaTotal;
    var plan100;
    var plan12;
    var todoOk = true;

    nombreCompleto = document.getElementById("nombreCompleto").value;
    deudaTotal = document.getElementById("deudaTotal").value;

    if(!isNaN(nombreCompleto))
    {       
        todoOk = false;
    }
    if(isNaN(deudaTotal) || !deudaTotal)
    {      
        todoOk = false;
    }

    if(!todoOk)
    {
        alert("Error, solo letras para el nombre");
        alert("Error, solo numeros para la deuda");
    }
    else{

        deudaTotal = parseInt(deudaTotal);
        plan100 = deudaTotal*0.60;
        plan100 = parseInt(plan100);
        plan12 = deudaTotal*0.15;
        plan12 = parseInt(plan12);
        
        nombreCompleto = nombreCompleto.toUpperCase();

        
        intimacionCompleta = "INTIMACION PREJUDICIAL \n\n Estimado "  + nombreCompleto + ": La Empresa PRESTALISTO nos encomendó el inicio de acciones judiciales en su contra tendientes al recupero de la DEUDA que mantiene con la Empresa que a la fecha asciende a la suma de $" + deudaTotal + ".\n\n" + " Recepcionamos su Legajo en el Estudio. Como registra una DEUDA menor y no presenta otros inconvenientes crediticios\n podemos ofrecerle una oportunidad ÚNICA hasta el 10 de AGOSTO de 2020  para solucionar su problema y evitar el Bloqueo de su CBU y EMBARGO de SUELDO.\n\nRECOVERY PLAN\n\n PLAN 💯: Permite la Cancelación Total de la Deuda abonando el 60% del monto total adeudado ($"+plan100+")\nPLAN AHORA 1️⃣2️⃣: Permite la Regularización Total de la Deuda abonando un ANTICIPO del 15% adeudado($"+plan12+")\nSaldo restante hasta 12 CUOTAS SIN INTERESES\n\nDE MARE Abogados & Asoc\nddm@demareabogados.com.ar";
        document.getElementById("intimacion").value = intimacionCompleta;
        
    }

}


function copiar()
{

    document.getElementById("intimacion").select();
    document.execCommand('copy');

}
