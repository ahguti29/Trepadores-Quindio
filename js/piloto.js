class piloto {
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
const pilot = [];
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

document.getElementById("btn").addEventListener('click',()=>{
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
})