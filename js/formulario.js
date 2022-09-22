class piloto {
    constructor(nombre, apellido, tipoDocumento, numDocumento, municipio, eps){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoDocumento = tipoDocumento;
        this.numDocumento = numDocumento;
        this.municipio = municipio;
        this.eps = eps;
    }
}
const pilot = [];
function obtenerDatosFormulario(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = "";
    let numDocumento = document.getElementById("numDoc").value;
    //let departamento = document.getElementById("depto").value;
    let municipio = document.getElementById("municipio").value;
    let eps = document.getElementById("eps").value;
    let cedula = document.getElementById("cedula");
    let ti = document.getElementById("ti");
    
    if(cedula.checked){
        tipoDocumento = cedula.value;
    } else {
        tipoDocumento = ti.value;
    }
    
    console.log(nombre);
    console.log(apellido);
    console.log(tipoDocumento);
    console.log(numDocumento);

    pilot.push(new piloto(nombre, apellido, tipoDocumento, numDocumento, municipio, eps));
    localStorage.setItem("objeto",pilot);
}

const boton = document.getElementById("btn")
boton.addEventListener('click',()=>{
    obtenerDatosFormulario();
    alert('Se completo el registro');
})

obtenerDatosFormulario();