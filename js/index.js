/* Clase que hace referencia a los pilotos que se van a registrar */
class Pilot {
	/* Metodo constructor de la clase piloto */
	constructor(name, lastname, idType, id , years, depto, city, eps) {
		this.name = name.toUpperCase();
		this.lastname = lastname.toUpperCase();
		this.idType = idType.toUpperCase();
		this.id = id;
		this.years = years;
		this.depto = depto;
		this.city = city;
		this.eps = eps;
	}
}

/* Declaración de los array  donde se van a guardar los pilotos y carros registrados */
const pilots = [];
const cars = [];
/* Solicitud de todos los datos del piloto mendiante el prompt */
let nameP = prompt('Ingrese su nombre: ');
let lastname = prompt('Ingrese su apellido: ');
let idType = prompt(
	'Ingrese el tipo de documento: \n CC = Cedula de Ciudadania \n TI = Tarjeta de Identidad'
);
let id = parseInt(
	prompt('Ingrese numero de documento sin puntos ni comas: ')
);
let years = parseInt(prompt('Ingrese su edad: '));
let depto = prompt('Ingrese el Departamento de residencia: ');
let city = prompt('Ingres el municipio de residencia: ');
let eps = prompt('Ingrese el nombre de la EPS a la cual usted esta afiliado: ');

/* Linea que permite crear un nuevo piloto teniendo en cuenta los datos ingresados por el usuario */
let piloto = new Pilot(
	nameP,
	lastname,
	idType,
	id,
	years,
	depto,
	city,
	eps
);


class Car {
	/* Metodo constructor de la clase carro */
	constructor(placa, marca, linea, modelo, caracteristica, color, potencia, cilindrada, categoria) {
		this.placa = placa.toUpperCase();
		this.marca = marca.toUpperCase();
		this.linea = linea.toUpperCase();
		this.modelo = modelo;
		this.caracteristica = caracteristica;
		this.color = color;
		this.potencia = potencia;
		this.cilindrada = cilindrada;
        this.categoria = categoria;

	}
}

let placa = prompt('Ingrese la placa del carro: ');
let marca = prompt('Ingrese la marca del carro: \n Ejemplo: Renault, Chevrolet, Mercedez');
let linea = prompt('Ingrese la linea del carro: \n Ejemplo: Sail');
let modelo = prompt('Ingrese el modelo de su vehiculo: \n Ejemplo: LS, LT, LTZ ');
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

/* Funcion que permite ubicar el carro en la categoria que le corresponda
teniendo en cuenta 3 aspectos que son el cilindraje o cilindrada, la potencia 
y las modificaciones del vehiculo o caracteristicas*/

const categoriaCarro = (caracteristica, cilindrada, potencia) => {
    /* De acuerdo a la caracteristica ingresada por el usuario evalua cada uno de los valores y de acuerdo  a
	las  decisiones de cada caso ubica al vehiculo en la categoria que corresponda.*/
	switch (caracteristica) {
		case 1:
			if (cilindrada <= 1400) {
				alert('Su carro esta en la categoria TQ1');
				break;
			} else if (cilindrada >= 1500 && cilindrada <= 1600) {
				alert('Su carro esta en la categoria TQ2');
				break;
			} else if (cilindrada >= 1800 && cilindrada <= 2500) {
				alert('Su carro esta en la categoria TQ4');
				break;
			}
			break;

		case 2:
			if (cilindrada >= 1300 && cilindrada <= 2000) {
				alert('Su carro esta en la categoria TQ3');
			}
			break;
		case 3:
			if (cilindrada >= 2000 && cilindrada <= 3700) {
				alert('Su carro esta en la categoria TQ5');
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 4:
			if (cilindrada <= 1800 && potencia <= 260) {
				alert('Su carro esta en la categoria TQ6');
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 5:
			if (cilindrada === 2000 && potencia <= 260) {
				alert('Su carro esta en la categoria TQ6');
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 6:
			if (
				cilindrada >= 2000 &&
				cilindrada <= 3000 &&
				potencia > 260 &&
				potencia <= 360
			) {
				alert('Su carro esta en la categoria TQ7');
				break;
			} else if (cilindrada <= 3000 && potencia > 360 && potencia <= 400) {
				alert('Su carro esta en la categoria TQ8');
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 7:
			if (potencia > 400 && potencia <= 500) {
				alert('Su carro esta en la categoria TQ9');
				break;
			} else {
				alert(
					'La potencia del vehiculo en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 8:
			if (potencia > 500) {
				alert('Su carro esta en la categoria GTS2');
				break;
			} else if (potencia <= 500) {
				alert(
					'La potencia del vehiculo en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
				break;
			} else break;
		default:
			alert('El valor ingresado es incorrecto');
			break;
	}

	alert('Su registro fue exitoso');
	return;
};

//Variable que llama a la funcion categoria carro para obtener la categoria en la cual quedara el carro
// y tener datos completos para completar el registro.
let categoria = categoriaCarro(caracteristica, cilindrada, potencia);
/* Linea que permite crear un nuevo carro teniendo en cuenta los datos ingresados por el usuario */
let carro = new Car( placa, marca, linea, modelo, caracteristica, color, potencia, cilindrada, categoria);

/* Linea que permite agregar el registro a el array de pilotos y carros */
pilots.push(piloto);
cars.push(carro);
alert('registro exitoso');
console.log(pilots);
console.log(cars);