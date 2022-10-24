class piloto {

  /* Metodo Constructor de la clase piloto */
    constructor(nombre, apellido, tipoDocumento, numDocumento, departamento, municipio, eps){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoDocumento = tipoDocumento;
        this.numDocumento = numDocumento;
        this.departamento = departamento;
        this.municipio = municipio;
        this.eps = eps;
    }
}
/* Array que almacena los pilotos inscritos */
const pilot = [];
let btn = document.getElementById("btn");

/* Funcion que obtiene los datos ingresados en el formulario, crea el registro de un piloto, 
lo agrega al array y queda almacenado en el localStorage */
function obtenerDatosPiloto(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = "";
    let numDocumento = document.getElementById("numDoc").value;
    let departamento = document.getElementById("depto").value;
    let municipio = document.getElementById("municipio").value;
    let eps = document.getElementById("eps").value;
    let cedula = document.getElementById("cedula");
    let ti = document.getElementById("ti");
    
    cedula.checked ? tipoDocumento = cedula.value : tipoDocumento = ti.value;

    
    pilot.push(new piloto(nombre, apellido, tipoDocumento, numDocumento, departamento, municipio, eps));
    localStorage.setItem("piloto",JSON.stringify(pilot));
}

/* Código para asignar las funciones al boton inscribir haciendo uso del evento click,
se obtienen todos los datos del formulario y se almacenan en los array y en el localStorage*/
btn.addEventListener('click',() => {
  obtenerDatosPiloto();
  obtenerDatosCarro();
    Swal.fire({
        title: '¿Los datos son correctos?',
        text: "No podras modificar los datos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, acepto!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Completo!',
            'Estas registrado.',
            'success'
          )
        }
      })
    document.getElementById("form").reset();
});

