// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray = []
  var keys = Object.keys(objeto);
  var values = Object.values(objeto);

  for(i=0; i < keys.length; i++){
    for(j=0; i < values.length; j++){
      nuevoArray.push([keys[i], values[i]])
      i++
    }
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for(i=0; i < string.length; i++){
    if(obj.hasOwnProperty(string[i])){
      obj[string[i]] = obj[string[i]] + 1;
    } else{
      obj[string[i]] = 1;
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cambiar = s.split(""); 
  var mayusculas = [];
  var minusculas = [];

  for(i=0; i<cambiar.length; i++){
    if(cambiar[i] === cambiar[i].toUpperCase()){
      mayusculas.push(cambiar[i])
    }else{
      minusculas.push(cambiar[i])
    }
  }
    return mayusculas.join("") + minusculas.join("")
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var convertir = str.split(" "); // [The, Henry, Challenge, is, Close! ] [T,h,e,H,e,n,r,y,...Si el split() no tiene el espacio entre las comillas]
  var arrayNew = [];
  for(i=0; i<convertir.length; i++){
    arrayNew.push(convertir[i].split("").reverse().join("")) // -> [T,h,e] -> [e,h,T] -> "ehT"
  }
  return arrayNew.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString(); //Ej: 540 = "540" 
  var numInvertido = num.split("").reverse().join(""); // "540" -> ["5","4","0"] -> ["0","4","5"] -> "045"
  if(num === numInvertido){ 
    return "Es capicua";
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sinABC = "";
  for(i=0; i<cadena.length; i++){
      if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
        continue;
      }else{
        sinABC = sinABC + cadena[i];
      }
  }
  return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio = true;
  while(cambio){  // var cambio entra como true pero ni bien entra pasa a false para que no se cree un bucle infinito
    cambio = false;
    for(i=0; i<arr.length-1; i++){  
      if(arr[i].length > arr[i+1].length){ // ["You", "are", "beautiful", "looking"]
        var aux = arr[i]; // aux = "beautiful"
        arr[i] = arr[i+1]; // arr[i] = "looking"
        arr[i+1] = aux; // arr[i+1] = "beautiful"
        cambio = true; //al hacer un cambio en el if, cambio se vuelve true y vuelve a entrar a While
        // porque esta en true nuevamente, al volver a entrar al for y ver que ya no hay ningun valor mayor que el siguiente 
        //no va entrar el if entonces va salir del for y ya no va entrar al While 
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrVacio = [];
  for(i=0; i<arreglo1.length; i++){    // [2, 3, 6, 8, 9]
    for(j=0; j< arreglo2.length; j++){ // [4, 2, 5, 9, 7]
      if(arreglo1[i] === arreglo2[j])
      arrVacio.push(arreglo1[i]); // dentro de arrVacio se van a ir pusheando los elementos que coincidan de arreglo1 y arreglo2
    }            //(arreglo2[j]);           
  }
  return arrVacio;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

