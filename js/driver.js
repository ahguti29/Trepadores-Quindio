/* Funcion flecha que permite crear un div en el archivo drivers.html en el cual 
se cargan los pilotos almacenados en el archivo stockPilotos */
const mostrarPilotos = (pilots) => {
    let contenedorPilotos = document.getElementById("contenedor_pilots");
    pilots.forEach(pilot => {
        const div = document.getElementById("pilot");
        div.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 card effect pt-4 mb-1 w-auto ms-3 me-3 mt-3 text-center">
                            <div class="card-body">
                                <div class="row">
                                    <div class="rank col-6 text-center rounded-pill border border-secondary border-opacity-50 border-2">${pilot.id}</div>
                                    <div class="col-6 fst-italic fw-semibold text-end info">
                                        <div class="w-75 h5 ">${pilot.pts}</div>
                                        <div class="info__pts float-end">Pts</div>
                                    </div>
                                </div>
                                <div class="row pt-3 m-2 border-secondary border-top border-bottom border-2">
                                    <div class="col-6 fw-semibold text-uppercase">
                                        <p>
                                            ${pilot.nombre}
                                        </p>
                                    </div>
                                    <div class="col-6 text-end">
                                        <img src="../images/espana.png" alt="Bandera país Sebastian Perez" style="height: 40px;">
                                    </div>
                                </div>
                                <div>
                                    <img src="${pilot.link}" alt="checo perez piloto Trepadores Quindio" />
                                </div>
                            </div>
                        </div>`
        contenedorPilotos.appendChild(div);
    })
  }
  mostrarPilotos(pilots);