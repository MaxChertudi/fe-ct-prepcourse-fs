/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var newArray = [];
   var elemento;
   for(let prop in objeto){
      elemento = new Array(prop, objeto[prop]);
      newArray.push(elemento);
   }
   return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var arrString = string.split('');
   var obj = {};

   for (let i=0; i < arrString.length; i++) {
      var count = 0;
      arrString.forEach((num) => {if (num === arrString[i]) {count++}});
      obj[arrString[i]] = count;
   }
   return obj;
}



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

      var strUpperCase = "";
      var strLowerCase = "";

      for (let i=0; i < string.length; i++) {
         if (string[i] === string[i].toUpperCase())
            strUpperCase = strUpperCase + string[i];
         else
            strLowerCase = strLowerCase + string[i];
      }
      return strUpperCase + strLowerCase;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var esarf = [];

   arrFrase = frase.split(' ');
   for (i=0; i<arrFrase.length; i++) {
         var sourceArray = arrFrase[i].split('');
         var invertido = sourceArray.reverse();
         var toString = invertido.join('');
         esarf.push(toString);
         console.log(sourceArray, invertido, toString, esarf);
   }
   return esarf.join(' ');
}


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var res = "";
   var strNumero = numero.toString();
   var sourceArray = strNumero.split('');
   var invertido = sourceArray.reverse();
   var strNumeroInvertido= invertido.join('');
   if (strNumero === strNumeroInvertido)
      res = "Es capicua";
   else
      res ="No es capicua";
   return res;
}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var res = "";
   for (i=0; i<string.length; i++) {
      if (string[i]!='a' && string[i]!='b' && string[i]!='c')
         res = res + string[i];
   }
   return res;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:


   var arrReturn = [];
   var indice = 0;
   
   arrReturn.push(arrayOfStrings[0]);
   
   for (i=1; i<arrayOfStrings.length; i++) {
      indice = arrReturn.length;
      for (j=0; j < arrReturn.length; j++) {
         
         if (arrayOfStrings[i].length >= arrReturn[j].length) {
            indice = j+1;
         }  
         console.log("loop; ", arrayOfStrings[i],  arrReturn, j , indice, arrayOfStrings[i].length , arrReturn[j].length );
      }
      arrReturn.splice(indice, 0, arrayOfStrings[i]);
      console.log("arrreturn:", arrReturn, arrayOfStrings[i], indice);
   } 

   console.log(arrayOfStrings, arrReturn);
   return arrReturn;
}
console.log(sortArray(['pera', 'manzana', 'alcaucil', 'papa']));


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   arrRet = [];
   for (i=0; i < array1.length; i++) {
      for (j=0; j < array2.length; j++) {
         if (array1[i] === array2[j])
            arrRet.push(array1[i]);
      }
   }  
   return arrRet;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
