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


document.getElementById('calendar').addEventListener('click', (e) => {
    console.log(e);
    document.getElementById('newInfo').removeAttribute('hidden');
    const div = document.getElementById('newInfo');
    div.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card etapa bg-dark bg-gradient text-white">
        <div class="card-body etapa__city">
            <div class="etapa__city-flag" style="cursor: pointer">
                <img src="./images/francia.png" class="ale_images"alt="Bandera carrera alemania.">
            </div>
            <span class="name">${e.target.id}</span>
        </div>
        <section> 
            <div> 
                <header> 
                <h3>PRIMERA VALIDA TREPADORES FILANDIA 2022</h3>
                </header>
                <p> 
                    <input type= "text">
                </p>
            </div>
        </section>
    </div>`;
});

