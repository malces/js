/*console.log("Inicio de programa");
alert("Hola JavaScript");
document.write("<h1> Hola JavaScript!!!</h1>");
alert("gracias por su visita");
console.log("Fin del programa");
var equipo= prompt("Cual es tu equipo favorito ??");
console.log ("El equipo es:" + equipo);
var clave = prompt("Hola Usuario, Ingrese su clave!");
console.log("La longitud de la clave es:" + clave.length);
var clave = prompt("Hola Usuario, Ingrese su clave ! ");
console.log("La longitud de la clave:" + clave.length);
console.log("TA-DA!!! su clave es:" + clave.toUpperCase());
console.log("El valor original de la clave es: " + clave);
document.write("<h2> SU CLAVE ES: " + clave + "</h2>");*/

/*console.log("Inicio del Programa");
var preguntas =3;
var preguntasFaltantes = "quedan " + preguntas +" preguntas. ";
alert("Este es el juego del cuenta cuentos. Sigue las instrucciones");
var sustantivo1 = prompt("Ingrese un sustantivo. " + preguntasFaltantes);
preguntas = preguntas-1;
preguntasFaltantes = "quedan " + preguntas + " preguntas";
var adjetivo1 = prompt("Ingrese un adjetivo. " + preguntasFaltantes);
preguntas-=1;
preguntasFaltantes = "quedan " + preguntas + " preguntas";
var verbo1 = prompt("Ingrese un verbo. " + preguntasFaltante);*/


/*document.write("<h1> CUENTO MUY CORTITO </h1>");
document.write("<h2> Ingrese los siguientes datos </h2>");

var sustantivo = prompt("Ingrese el sustantivo");
var adjetivo = prompt("Ingrese el adjetivo");
var verbo = prompt("Ingrese el verbo");

// PALABRAS PARA INGRESAR 
// SUSTANTIVO: mujer
// ABJETIVO: enamorada
// VERBO: conquistar 

document.write("<h3> La " + sustantivo + " americana " + adjetivo + " quiere un perrito para " + verbo + " al novio </h3>");
document.write("<h3> El novio " + verbo + " quiere una " + sustantivo + " americana y " + adjetivo + " de un perrito </h3>");
document.write("<h3> El perrito " + adjetivo + " quiero un novio para " + verbo + " a la " + sustantivo + " americana </h3>");
document.write("<h3> Y VIVIERON FELICES... </h3>");*/

/*var segundosPorMinuto = 60;
var minutosPorHora= 60;
var horasPorDia =24;
var segundosPorDia = segundosPorMinuto*minutosPorHora*horasPorDia;
document.write("<h1> calculadora del tiempo </h1><p> hay " + segundosPorDia + " en un dia </p>");*/


/*console.log("Inicio del Programa");
var peliculasVistas =prompt("Cuantas peliculas has visto en este mes");
var seriesVistas= prompt("cuantas series has visto en este mes");
var tiempoPantalla = parseInt(peliculasVistas)+ parseInt(seriesVistas);
alert('Wow! has visto ' + tiempoPantalla + " veces minimo la pantalla.");
console.log("Fin del Programa");*/

//////////   FUNCION MATH   /////////////
//console.log("Inicio del Programa");
//var numero = prompt("Ingrese un numero");
//var dado = Math.floor(Math.random() * numero ) +1;
//alert("el numero aleatorio es: " + dado);
//console.log("Programa completado");

//////////   CONDICION IF - ELSE   /////////////
/*console.log("Inicio del Programa");

var numero = prompt("Ingrese un numero del 1 al 10");
if (numero === 8){
	alert("correcto")
}
else if (numero > 8){
		numero = prompt("intentalo por segunda vez, el numero es menor");
	}
else (numero < 8){
	alert("te equivocaste, el numero es: 8 ")
}
console.log("Programa completado");*/


function tiraDados(){
	var dado = Math.floor(Math.random()*6)+1;
	alert(dado);
}
alert("Tiramos 3 dados: ");
tiraDados();
tiraDados();
tiraDados();
