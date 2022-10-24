/* Código que permite modificar el DOM del index.html obteniendo la información desde el archivo
calendar.json que contiene la información de todas las validas del campeonato*/
fetch("./json/calendar.json")
.then(response => response.json())
.then(calendar => {
    calendar.forEach(calendar =>{
        const div = document.getElementById('calendar');
		div.innerHTML += `<div class="col-sm-4 col-md-3 col-lg-2 races__calendar-list">
                            <div class="card etapa bg-dark bg-gradient text-white">
                                <div class="card-body etapa__city">
                                    <div class="etapa__city-flag">
                                        <img src="${calendar.flag}" id="${calendar.city}" class="ale_images"alt="Bandera carrera alemania.">
                                    </div>
                                    <span class="name">${calendar.city}</span>
                                </div>
                                <span>
                                    <time>${calendar.day}</time>
                                    <time>${calendar.month}</time>
                                </span>
                            </div>
                        </div>`;
    });
})

/* Codigo que permite modificar el DOM mediante el evento click. Crear un nuevo div con la información
sobre el evento seleccionado*/
document.getElementById('calendar').addEventListener('click', (e) => {
    document.getElementById('newInfo').removeAttribute('hidden');
    const div = document.getElementById('newInfo');
    div.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-3 w-auto">
    <div class="card etapa bg-dark bg-gradient text-white information">
        <div class="card-body etapa_inf">
            <div class="etapa__city-flag" style="cursor: pointer">
                <img src="./images/francia.png" class="ale_images"alt="Bandera carrera alemania.">
            </div>
            <span class="">${e.target.id}</span>
            <h3>PRIMERA VALIDA TREPADORES FILANDIA 2022</h3>
            <span>
                <time>19 Julio</time> -
                <time>20 Julio</time>
            </span>
        </div>
        <section> 
            <div class="details"> 
                <header> 
               <img src="./images/Motul_logo.svg.png">
                </header>
                <div class="details_race">REVISIÓN TÉCNICA: 19 de Julio</div>
                <div class="details_race">CARRERA: 20 de Julio</div>
            </div>
        </section>
    </div>`;
});

