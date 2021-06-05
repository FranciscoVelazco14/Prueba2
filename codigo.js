function entregarDatos(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    if(document.getElementById("numero1").value == "" && document.getElementById("numero2").value == ""){
        alert("No hay dos numeros que sumar");
        
    }else{
        document.getElementById("nombres").innerHTML = suma(numero1,numero2);
    }
}
function suma(a,b){
    var sumaT=a+b;
    return sumaT;
}