// Getters y Setters
class Persona{ // clase Persona(Principal)
    constructor (nombre, apellido){ 
        // atributos de la clase persona
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // Metodo de la clase principal
    nombreCompleto(){
        return `${this._nombre} ${this._apellido}`
    }
    get nombre(){ // con esta funcion get lo que hace es devolver el valor que contiene
        return this._nombre;
    }
    set nombre(nombre){ // con esta funcion set, se le puede modificar el valor a lo largo del codigo
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}
// con los metodo Set y Get, se juega mucho el encapsulamiento, si se utiliza metodo get, el acceso de modificador
// se vuelve privado, pero si se utiliza set, el acceso de modificadro se vuelve publico, asi mismo
// podiendose asignarel un valor mas adelante del codigo.

let persona1 = new Persona("Juan", "Perez") // Instanciamiento de nuevo objeto

// Metodo get, simplemente se pueden mostrar en consola, una particularidad es que, como es de
// acceso privada no es necesario colocar los parentesis "()" al final de la funcion cuando se
// hace un console.log()
console.log(persona1); // imprime los atributos de persona 1
console.log(persona1.nombre); // imprime el nombre de persona 1
console.log(persona1.apellido); // imprime el apellido de persona uno

// aqui ya se puede ver el metodo set, el cual se le puede modificar el valor al atributo que se 
// esta declarando en la clase principal
persona1.nombre = "Alonso"; // se le cambia el valor a Alonso con el metodo set
persona1.apellido = "Develop"; // se le cambia el valor a Develop con el metodo set
console.log(persona1) // imprime todo lo modificado en consola