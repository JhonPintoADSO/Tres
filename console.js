console.log(console) // esto para determinar todo del objeto console
console.error("Este es un error"); // se muestra el error en consola, especialmente en rojo
console.warn("Esta es una alerta"); // Se muestra el aviso de advertencia, de color amarillo
console.info("Este da informacio"); // se muestra como si fuera un console.log pero es informativo
console.log("Registro de todo lo que pasa"); // este es como un registro de lo que pasa en todo el codigo
console.assert(); // este funciona cuando se estan haciendo deciciones
// console.clear(); // Funciona para limpiar todo el registro que ahi en la consola
console.count(); // cuenta las veces que se llama count() este viene con un valor por defecto = 1
console.countReset(); // Reinicia el valor del contador de la etiqueta dada
console.debug("Este es un mensaje de debug"); // registra un mensaje con el nivel de debug
console.dir(location); // Despliega una lista interactiva de las propiedades del objeto
console.group(); // crea nuevos grupos de lineas de registros funciona hasta que el console.groupEnd() se defina