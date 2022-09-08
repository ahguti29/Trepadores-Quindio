/* Clase que hace referencia a los pilotos que se van a registrar */
class Piloto {
	/* Metodo constructor de la clase piloto */
	constructor(nombre, apellido, tipoDoc, numDoc, edad, depto, municipio, eps) {
		this.nombre = nombre.toUpperCase();
		this.apellido = apellido.toUpperCase();
		this.tipoDoc = tipoDoc.toUpperCase();
		this.numDoc = numDoc;
		this.edad = edad;
		this.depto = depto;
		this.municipio = municipio;
		this.eps = eps;
	}
}

/* Declaración de los array  donde se van a guardar los pilotos y carros registrados */
const pilotos = [];
const carros = [];
/* Solicitud de todos los datos del piloto mendiante el prompt */
let nombre = prompt('Ingrese su nombre: ');
let apellido = prompt('Ingrese su apellido: ');
let tipoDoc = prompt(
	'Ingrese el tipo de documento: \n CC = Cedula de Ciudadania \n TI = Tarjeta de Identidad'
);
let numDoc = parseInt(
	prompt('Ingrese numero de documento sin puntos ni comas: ')
);
let edad = parseInt(prompt('Ingrese su edad: '));
let depto = prompt('Ingrese el Departamento de residencia: ');
let municipio = prompt('Ingres el municipio de residencia: ');
let eps = prompt('Ingrese el nombre de la EPS a la cual usted esta afiliado: ');

/* Linea que permite crear un nuevo piloto teniendo en cuenta los datos ingresados por el usuario */
let pilot = new Piloto(
	nombre,
	apellido,
	tipoDoc,
	numDoc,
	edad,
	depto,
	municipio,
	eps
);


class Carro {
	/* Metodo constructor de la clase carro */
	constructor(placa, marca, linea, modelo, caracteristica, color, potencia, cilindrada) {
		this.placa = placa.toUpperCase();
		this.marca = marca.toUpperCase();
		this.linea = linea.toUpperCase();
		this.modelo = modelo;
		this.caracteristica = caracteristica;
		this.color = color;
		this.potencia = potencia;
		this.cilindrada = cilindrada;
	}
}

let placa = prompt('Ingrese la placa del carro: ');
let marca = prompt('Ingrese la marca del carro: ');
let linea = prompt('Ingrese la linea del carro:');
let modelo = parseInt(prompt('Ingrese el modelo de su vehiculo: '));
let caracteristica = parseInt(
	prompt(
		'Seleccione el número de la caracteristica que corresponda:  \n 1. Aspirados \n 2. Aspirados Modificados \n 3. Aspirados Deportivos \n 4. Turbo o Supercargados \n 5. Turbo Stock \n 6. Turbo FWD-AWD-RWD \n 7. Turbos y aspirados FWD-AWD-RWD \n 8. 501 hp o superior '
	)
);
let color = prompt('Ingrese el color del carro: ');
let potencia = prompt('Ingrese la potencia del carro en (HP): ');
let cilindrada = prompt(
	'Ingrese la cilindrada del carro en (CC): '
);

/* Linea que permite crear un nuevo carro teniendo en cuenta los datos ingresados por el usuario */
let car = new Carro( placa, marca, linea, modelo, caracteristica, color, potencia, cilindrada);

pilotos.push(pilot);
carros.push(car);
alert('registro exitoso');
console.log(pilotos);
console.log(carros);