const mostrarVideos = (videos) => {
    const contenedorVideos = document.getElementById("contenedor_video")

    videos.forEach(video => {
        const div = document.getElementById("vid");
        div.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 pt-3 pb-3">
                            <article class="card-video effect">
                            <iframe src="${video.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div class="card-body">
                                <h5 class="card-title fw-bold">${video.title}</h5>
                                <p class="card-text my-4">${video.text}</p>
                                </div>
                            </article>
                        </div>`

        contenedorVideos.appendChild(div)
    })
}


mostrarVideos(videos);