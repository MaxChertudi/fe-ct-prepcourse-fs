/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map((num) => {return num + 1});
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = "";
   palabras.forEach((palabra) => {
      if (frase.length > 0)
         frase = frase + ' ' + palabra;
      else  
         frase = palabra;
   });
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   var suma = 0;
   arrayOfNums.forEach((num) => suma=suma+num);
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   suma = 0;
   for (i=0; i<resultadosTest.length; i++) {
      suma = suma + resultadosTest[i];
   }
   return suma / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   max = arrayOfNums[0];
   for (i=1; i<arrayOfNums.length; i++) {
      if (arrayOfNums[i] > max)
         max = arrayOfNums[i];
   }
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var result = 1;
   
   if (arguments.length === 0)
      result = 0;
   else  
      if (arguments.length === 1)
         result = arguments[0];
      else {
         for (i=0; i<arguments.length; i++) {
            result = result * arguments[i];
            //console.log(arguments[i], result)
         }
      }
      return result;
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   cant = 0;
   for (i=0; i<array.length; i++) {
      if (array[i] > 18)
         cant++;
   }
   return cant;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var dia = ["", "Es fin de semana", "Es dia laboral", "Es dia laboral", "Es dia laboral", "Es dia laboral", "Es dia laboral", "Es fin de semana"];
   return dia[numeroDeDia];
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var cifras = num.toString();
   var arr = cifras.split('');
   result = false;
   if (arr[0] === '9')
      result = true;
   return result;
}


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   var result = true;
   var Loop = true;
   var i = 0;
   
   while (i<array.length && Loop) {
      if (array[i] !== array[0]) {
         result = false;
         Loop = false;
      }
      i++;
   }
    return result;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   result = 0;
   arrayBack = [];
   for (i=0; i<array.length; i++){
      if ((array[i] === "Enero") || (array[i] === "Marzo") || (array[i] === "Noviembre"))
         arrayBack.push(array[i]);
   }
   if (arrayBack.length < 3)
      result = "No se encontraron los meses pedidos";
   else
      result = arrayBack;
      
   return result;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array = [];
   for (i=0; i<11; i++){
      array.push(6*i);
   }
   return array;
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arrayBack = [];
   var j = 0;
   for (i=0;i<array.length; i++) {
      if (array[i] > 100)
         arrayBack.push(array[i]);
      j++;
   }
   return arrayBack;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var i = 0;
   var suma = 0;
   var result = "";
   var array = [];

   while (i<10){
      array.push(num + 2);
      suma = suma + num + 2;
      num = num + 2;
      i++;
      if (suma === i) {
         result = "Se interrumpió la ejecución";
         break;
      }
      else  
         result = array;
   }
   return result;
}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var i = 0;
   var array = [];

   while ( i < 10 ){
      if ( i !== 5 ) {
         array.push(num + 2);
         num = num + 2;
         console.log(i);
      }
      i++;
   }
   return array;
}
console.log(continueStatement(50));


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
