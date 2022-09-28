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
