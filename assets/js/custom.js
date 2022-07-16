
function sum(a, b) { 
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    a = Number(a);
    b = Number(b);
    if (a == 0 || b == 0) {
        alert("Por favor ingresa un valor");
    }
    else if (a  < 0 || b > 1000) {
        alert("Por favor ingresa un valor válido");
    }
    else{
    var sum = a + b;
    document.getElementById("htmlSUM").innerHTML = sum;
    }
    return sum;
    }
    j = document.getElementById("jsSUM");
    j.innerHTML = sum;
  
 
// ---------------------------------------------------------------------------------------------------------------------
function sumArray(ar){
    var n = document.getElementById("nArray").value;
    var ar = document.getElementById("nElements").value;
    var sumArray = ar.split(' ');
    var largo = sumArray.slice(0, n);
    var sumArray = largo.reduce((a,b) =>
    parseInt(a)+parseInt(b)
    );
    document.getElementById("htmlSARR").innerHTML = sumArray;
    document.getElementById("SARR").innerHTML = largo;

    return sumArray;

}
    j = document.getElementById("jsSARR");
    j.innerHTML = sumArray;