// Objeto date
let fechaActual = new Date(); // instanciamiento de objeto date
console.log(fechaActual); // imprimira fecha actual
console.log(fechaActual.getDay()); // se imprimira el dia actual, va desde 0 a 6, siendo 0 domingo y 6 sabado
console.log(fechaActual.getFullYear()); // se imprimira el año actual
console.log(fechaActual.getMonth()); // los meses van desde 0 a 11, imprime 2 es decir "Marzo"
console.log(fechaActual.getDate()); // imprimira el dia del mes

//Timestamp: 01 Enero 1970 => Actualidad
console.log(fechaActual.getTime());
 // Muestra las horas que han transucurrido