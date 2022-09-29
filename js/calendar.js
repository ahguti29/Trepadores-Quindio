const mostrarCalendario = (calendar) => {
	const contenedorCalendario = document.getElementById('contenedor_calendar');

	calendar.forEach((calendar) => {
		const div = document.getElementById('calendar');
		div.innerHTML += `<div class="col-sm-4 col-md-3 col-lg-2 races__calendar-list">
                            <div class="card etapa bg-dark bg-gradient text-white" id=verCalendar>
                                <div class="card-body etapa__city">
                                    <div class="etapa__city-flag">
                                        <img src="${calendar.flag}" class="ale_images"alt="Bandera carrera alemania.">
                                    </div>
                                    <span class="name">${calendar.city}</span>
                                </div>
                                <span>
                                    <time>${calendar.day}</time>
                                    <time>${calendar.month}</time>
                                </span>
                            </div>
                        </div>`;
		contenedorCalendario.appendChild(div);
	});
};

mostrarCalendario(calendar);

const calendario = (evento) => {
    const div = document.getElementById('verCalendar');
	div.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card etapa bg-dark bg-gradient text-white">
                            <div class="card-body etapa__city">
                                <div class="etapa__city-flag">
                                    <img src="${evento.flag}" class="ale_images"alt="Bandera carrera alemania.">
                                </div>
                                <span class="name">${evento.city}</span>
                            </div>
                            <section> 
                                <div> 
                                    <header> 
                                    <h3>PRIMERA VALIDA TREPADORES FILANDIA 2022</h3>
                                    </header>
                                    <p> 
                                        <time> ${evento.day} ${evento.month}</time>
                                    </p>
                                </div>
                            </section>
                        </div>`;
};

document.getElementById('calendar').addEventListener('click', calendario);

