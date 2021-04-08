var numeroDeSolicitud = 1;

function startFib(){
    //Titulo de la busqueda
    var newDiv = document.createElement("div");
    newDiv.className = "tituloBusqueda"
    var newContent = document.createTextNode("SOLICITUD DE NUMERO FIBONACCI "+numeroDeSolicitud);
    newDiv.appendChild(newContent); //añade texto al div creado.
    
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("js");
    var parentDiv = document.getElementById("padre");
    parentDiv.insertBefore(newDiv, currentDiv);


    var inputVal = document.getElementById("numero").value;
    var resultado = translateToString(fibonacci(parseInt(inputVal)))
    console.log(resultado)

    //Añadimos el resultado
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    newP.className="resultadosFinales"
    newDiv.appendChild(newP);
    var newContent = document.createTextNode("Resultado:");
    newP.appendChild(newContent); //añade texto al div creado.
    var newP = document.createElement("p");
    newP.className="resultadosFinales"
    newDiv.appendChild(newP);
    var newContent = document.createTextNode(resultado);
    newP.appendChild(newContent); //añade texto al div creado.
    
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("js");
    var parentDiv = document.getElementById("padre");
    parentDiv.insertBefore(newDiv, currentDiv);
    numeroDeSolicitud++;
}

function fibonacci(n) {
    var arr = [[0], [1]];
    for (var i = 2; i <= n; i++){
      arr.push(add(arr[i - 1], arr[i - 2]));
    }
    return arr[n];
}

function convert(arr, length){
    for(let i = 0; i < length; i++){
      if(arr[i] === undefined){
        arr[i] = 0;
      }
    }
    return arr;
}
function add(arr1, arr2){
    if(arr1.length > arr2.length){
      arr2 = convert(arr2, arr1.length);
    }
    else if(arr1.length < arr2.length){
      arr1=convert(arr1, arr2.length);
    }
    var sum = [];
    var transfer=0;
    for(let i = 0; i < arr1.length; i++){
      if((arr1[i] + arr2[i]) + transfer < 10){
        sum[i] = arr1[i] + arr2[i] + transfer;
        transfer = 0;
      }
      else{
        sum[i] = (arr1[i] + arr2[i] + transfer) % 10;
        transfer = 1;
      }
    }
    if(transfer){
      sum.push(transfer);
    }
    return sum;
}
  
function translateToString(arr){
    var str = "";
    for (let i = arr.length-1; i>=0; i--){
    str = str + arr[i];
    }
  return str;
}