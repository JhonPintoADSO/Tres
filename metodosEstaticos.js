// palabra reservada static, para definir metodos estaticos, estos metodos estaticos principalmente
// son metodos los cuales sus propiedades e inclusivemente los metodos son privados de una clase
// y las clases heredadas si podran tener esos metodos y atributos estaticos
/**
 * METODOS Y ATRIBUTOS ESTATICOS
 */
class Mascota{ // clase principal mascotas
    static cola = "Larga";
    pelaje = "lacio;"
    static contador = 0;
    constructor (nombre,edad){ // atributos de la clase principal
        this.nombre = nombre;
        this.edad = edad;
        this.numero = ++Mascota.contador;
    }
    // Metodo para contador de objetos instanciados
    numeroCreacion(){
        return this.numero;
    }
    // Metodo estatico, privado de la clase y heredado a subclases
    static saludo(){
        return `Hola ${this.nombre}`;
    }
}

let m1 = new Mascota("Max",5); // instanciamos nuevo objeto 
let m2 = new Mascota("Bicho",3); // Instanciamos nuevo objeto
let m3 = new Mascota("Messi",2); // Instanciamos nuevo objeto
let m6 = new Mascota("Rubu", 15); // Instanciamos nuevo objeto

console.log(m1.cola); // imprimira undefined, ya que el atributo static es como por decirlo asi
                    // privado del atributo asi que no se podra mostrar en un nuevo objeto

console.log(m1.numeroCreacion()) // imprime 1
console.log(m2.numeroCreacion()) // imprime 2
console.log(m3.numeroCreacion()) // imprime 3
console.log(m6.numeroCreacion()) // imprime 4

console.log(Mascota.saludo()); // metodo estatico funciona nada mas para la clase y las subclases

// Subclase de la clase Mascota(Principal)
class Perro extends Mascota{ // heredar atributos y metodos de la clase principal
    constructor(nombre,edad,raza){ 
        super(nombre,edad); // hacer llamado a esos atributos heredados
        this.raza = raza;
    }
}

console.log(Perro.saludo()); // como es una subclase de la principal, esta heredara los metodos y atributos
console.log(Perro.cola); // imprime larga, al ser estatico y subclase puede utilizar este atributo
console.log(Perro.contador); // imprime la cantidad del ultimo objeto creado

let perroUno = new Perro("Rufus", 58, "Pitbull"); // instanciado nuevo objeto a la clase Perro

console.log(Perro.contador); // aumenta, ya que se agrega al metodo estatico de las clases, imprime 5