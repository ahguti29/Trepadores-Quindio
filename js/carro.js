class carro {
	constructor(placa, marca, linea, modelo, caracteristica, color, cilindrada, potencia) {
		this.placa = placa;
		this.marca = marca;
		this.linea = linea;
		this.modelo = modelo;
		this.caracteristica = caracteristica;
		this.color = color;
		this.cilindrada = cilindrada;
		this.potencia = potencia;
	}
}
const car = [];
let boton = document.getElementById("btn_cat");
function obtenerDatosCarro(){
	let placa = document.getElementById("placa").value;
	let marca = document.getElementById("marca").value;
	let linea = document.getElementById('linea').value;
	let modelo = document.getElementById('modelo').value;
	let caracteristica = document.getElementById('caracteristica').value;
	let color = document.getElementById('color').value;
	let cilindrada = document.getElementById('cilindrada').value;
	let potencia = document.getElementById('potencia').value;

	car.push(new carro( placa, marca, linea, modelo, caracteristica, color, cilindrada, potencia));
	localStorage.setItem('carro', JSON.stringify(car));
}
/* document.getElementById("btn").addEventListener('click',()=>{
    obtenerDatosCarro();
}) */

const categoriaCarro = (caracteristica, cilindrada, potencia) => { 
    /* De acuerdo a la caracteristica ingresada por el usuario evalua cada uno de los valores y de acuerdo  a
	las  decisiones de cada caso ubica al vehiculo en la categoria que corresponda.*/
	switch (caracteristica) {
		case 'Aspirados':
			if (cilindrada <= 1400) {
					Swal.fire({title: 'Su carro esta en la categoria TQ1',
							icon: 'info'});
				break;
			} else if (cilindrada >= 1500 && cilindrada <= 1600) {
				
					Swal.fire({title: 'Su carro esta en la categoria TQ2',
							icon: 'info'});
				break;
			} else if (cilindrada >= 1800 && cilindrada <= 2500) {
				Swal.fire({title: 'Su carro esta en la categoria TQ4',
							icon: 'info'});
				break;
			}else 
			break;

		case 'Aspirados Modificados':
			if (cilindrada >= 1300 && cilindrada <= 2000) {
				Swal.fire({title: 'Su carro esta en la categoria TQ3',
							icon: 'info'});
			}
			break;
		case 'Aspirados Deportivos':
			if (cilindrada >= 2000 && cilindrada <= 3700) {
				Swal.fire({title: 'Su carro esta en la categoria TQ5',
							icon: 'info'});
				break;
			} else {
				Swal.fire({title: 'Cilindrada',
							text: 'La cilindrada en la caracteristica seleccionada no esta permitida',
							icon: 'error'});
				categoriaCarro();
			}
			break;
		case 'Turbo o supercargados':
			if (cilindrada <= 1800 && potencia <= 260) {
				Swal.fire({title: 'Su carro esta en la categoria TQ6',
							icon: 'info'});
			} else {
				Swal.fire({title: 'Cilindrada',
							text: 'La cilindrada en la caracteristica seleccionada no esta permitida',
							icon: 'error'});
				categoriaCarro();
			}
			break;
		case 'Turbo Stock':
			if (cilindrada == 2000 && potencia <= 260) {
				Swal.fire({title: 'Su carro esta en la categoria TQ6',
							icon: 'info'});
			} else {
				Swal.fire({title: 'Cilindrada',
							text: 'La cilindrada en la caracteristica seleccionada no esta permitida',
							icon: 'error'});
				categoriaCarro();
			}
			break;
		case 'Turbo FWD-AWD-RWD':
			if (
				cilindrada >= 2000 &&
				cilindrada <= 3000 &&
				potencia > 260 &&
				potencia <= 360
			) {
				Swal.fire({title: 'Su carro esta en la categoria TQ7',
							icon: 'info'});
				break;
			} else
			 if (cilindrada <= 3000 && potencia > 360 && potencia <= 400) {
				Swal.fire({title: 'Su carro esta en la categoria TQ8',
							icon: 'info'});
				break;
			} else {
				Swal.fire({title: 'Cilindrada',
							text: 'La cilindrada en la caracteristica seleccionada no esta permitida',
							icon: 'error'});
				categoriaCarro();
			}
			break;
		case 'Turbo y aspirados':
			if (potencia > 400 && potencia <= 500) {
				Swal.fire({title: 'Su carro esta en la categoria TQ9',
							icon: 'info'});
				break;
			} else {
				Swal.fire({title: 'Potencia',
							text: 'La potencia en la caracteristica seleccionada no esta permitida',
							icon: 'error'});
				categoriaCarro();
			}
			break;
		case '501 hp o superior':
			if (potencia > 500) {
				Swal.fire({title: 'Su carro esta en la categoria GTS2',
							icon: 'info'});
				break;
			} else if (potencia <= 500) {
				Swal.fire({title: 'Potencia',
							text: 'La potencia en la caracteristica seleccionada no esta permitida',
							icon: 'error'});
				categoriaCarro();
				break;
			} else break;
		default:
			
			/* Swal.fire({title: 'El valor ingresado es incorrecto',
							text: 'Debe ingresar la cilindrada adecuada',
							icon: 'error'}); */
			break;
	}

	/* alert('Su registro fue exitoso'); */
	return;
}; 

boton.addEventListener("click", () => {
	obtenerDatosCarro();
	categoriaCarro(caracteristica.value, cilindrada.value, potencia.value);});