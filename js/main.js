
// console.log("Hola mundo cruel");


//Soy un comentario de una línea.

/*

Soy un comentario multilinea.

*/

// var dia = "Lunes";

// console.log(dia);

// dia = "Martes";

// console.log(dia);

// var mes;

// console.log(mes);

// var vacia = "";

// var dormir = false;

// console.log(dormir);

// var dias = "5";

// console.log(typeof(dias));

// var numero1 = 50;

// var numero2 = 73;

// var resultado = numero1 + numero2;

// console.log(resultado);

// resultado = numero1 - numero2;
// resultado = numero1 * numero2;
// resultado = numero1 / numero2;
// resultado = numero1 % numero2;

// var numero = 5;

// var resultado = numero ** 2;

// var numero = 665;

// numero++;

// console.log(numero);


// console.log("2"-"6");

// var variableOk = 13413452345;

// console.log("variableOk vale ..... ", variableOk,12);

// var numero1 = 11;

// var numero2 = 22;

// numero1 = numero1 + 11;

// numero1 += 11;

// && AND

// || OR

// != NO


// var nombre = "Jesus";

// var edad = 22;

// if((nombre == "Jesus") && (edad == 26)){

//     console.log("Que bien me cae este chico");



// }else{

//     console.log("Ya no me cae bien");
// };

// if((nombre == "Jesus") || (edad == 26)){

//     console.log("Que bien me cae este chico");



// }else{

//     console.log("Ya no me cae bien");
// };


// if(nombre != "Ambrosio"){
//     console.log("Bieeeeeeeeeeeeeeeeen");

// }else{
//     console.log("Maaaaaaaaaal");
// }

// var tiempoLibre = false;

// if(!tiempoLibre){
//     console.log("Que agonia");
// }




// var edad = 21;

// if(edad >= 18){
//     console.log("Puedes ver la pelicula");
// }else{
//     console.log("Espera a los 18 años");
// };

// var numero = 18;

// var letra = "18";

// if(numero === letra){
//     console.log("somos iguales");
// };


// var coche = "Seat";

// if(coche == "Renault"){
//     console.log("Es un renault");
// }else if(coche == "Seat"){
//     console.log("Es un seat");
// }else{
//     console.log("Es otro coche");
// }

// var dia = "Lunes";

// switch(dia){

//     case 'Lunes':

//         console.log("Es Lunes....");

//     break;

//     case 'Martes':

//         console.log("Es Martes....";)

//     break;

//     case 'Miercoles':

//     break;

//     case 'Jueves':

//     break;

//     case 'Viernes':

//     break;

//     case 'Sabado':

//     break;

//     case 'Domingo':

//     break;

//     default:
//         console.log("No es ninguno de los anteriores");
//     break;

// }


// switch(dia){

//     case 'Lunes':
//     case 'Martes':
//     case 'Miercoles':
//     case 'Jueves':
//     case 'Viernes':
//         console.log("Entre semana....")
//     break;

//     case 'Sabado':
//     case 'Domingo':
//         console.log("Es fin de semana...")

//     break;

//     default:
//         console.log("No es ninguno de los anteriores")
//     break;  
// }

// let edad = 16;

// //Ternaria, lo que observamos detrás del interrogante, se guardará si es true la condicion, si es false se guarda
// //lo que va detrás de los dos puntos.
// let resultado = (edad <= 16) ? "No puedes conducir en USA" : "Si puedes";


// let dinero = 50;

// while(dinero >= 0){

//     if(dinero == 0){
//         console.log("Pelat")
//     }else {

//         console.log("Estoy comprando..... y me quedan", dinero, " euros");
//     }

//     dinero -= 5;
// };

// console.log("Odio aparcar en Ruzafa");

// let c = 1;

// let tabla = parseInt(prompt("Quiero la tabla del...."));

// while(c <= 10){

//     console.log(tabla , "por", c, " es ", c * tabla);

//     c++;

// };



// let numero = 36;

//Se trata de un bucle con un funcionamiento igual al while PERO que la primera
//vez siempre entra.

// do{

//     console.log("David es un Genio");
// }while(numero < 36);


//BUCLE FOR

// for(let i = 1; i <= 20; i++){

//     console.log(i);

// };

// let tabla = 3;

// for(let i = 1; i <= 10; i++ ){

//     console.log(tabla * i);
// };







//FUNCIONES


// function Sumar(num1, num2){

//     ;

//     return num1 + num2; 

// };

// let resultadoDeSumar = Sumar(3,4);
// let resultadoDeSumarDeNuevo = Sumar(6,7);


// console.log(resultadoDeSumar);


// //Esto corresponde a la DECLARACION de la función
// function Sumar(num1,num2){
//     return console.log(num1 + num2);
// };

// //Aqui es cuando se ejecuta
// Sumar(2,3);


// let contenedor = function (num1,num2){ return num1 - num2};

// console.log(contenedor(4,2));


// function Dividir(num1,num2){
//     let resultado = num1 / num2;

//     return resultado;
// };

// let resultadoDeDividir = Dividir(10,5);

// console.log(resultadoDeDividir);

// let resultado = function () { 
//     let num1 = parseInt(prompt("Dime una base"));
//     let num2 = parseInt(prompt("Dime el exponente"));

//     return console.log(num1 ** num2);
// };

// resultado()

// function Elevar(){
//     let num1 = parseInt(prompt("Dime el numero base"));
//     let num2 = parseInt(prompt("Dime el exponente"));

//     let resultado = num1 ** num2;

//     return console.log(resultado);
// };

// Elevar();

// function Elevar(pepe,manolo){
//     return console.log(pepe ** manolo);
// }

// let num1 = parseInt(prompt("Dime el numero base"));
// let num2 = parseInt(prompt("Dime el exponente"));

// Elevar(num1,num2);



// let manelHobbie1 = "Tocar el bajo";
// let manelHobbie2 = "Leer";
// let manelHobbie3 = "Cine";
// let manelHobbie4 = "Programación";

// let manelArrayHobbies = ["Tocar el bajo","Leer","Cine","Programación"];

// console.log(manelArrayHobbies[2]);

// let bebida = "Agua";

// let comida = "Pan duro";

// let numero = 8;

// let hobbiesLiza = ["Leer","Running","Estudiar programación"];

// let arrayClase = [bebida,comida,numero,hobbiesLiza];

// console.log(arrayClase);

// let numeros = [];

// for(let i = 1; i <= 100; i++){


//     numeros.push(i);
// };

// console.log(numeros);


let alumnosAmigos = ["Alex Lopez","Joan","Marta","Elvis","Jesus","Julio Cesar"];

for(let i = 0; i < alumnosAmigos.length; i++){
    console.log("Hola ",alumnosAmigos[i]);
};