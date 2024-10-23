import { CarouselMusic } from '../components/CarouselMusic' // Importamos el componente Music
import { Playlist } from "../components/Playlist" // Importamos el componente Playlist
import "../assets/css/Home.css" // Importamos el archivo css de la página de inicio

export const Home = () => {
    return (

        // Contenido de la página de inicio
        <div className="home-container mt-3">
            <div className="text-center">
                <p className="fs-2"><strong>Las mejores canciones</strong></p>
                <p className="fs-5">¡Recomendadas especialmente para ti!</p>
            </div>
            <CarouselMusic />
            <div className="text-center mt-5">
                <p className="fs-2"><strong>Elige entre tus gustos musicales con las playlists</strong></p>
                <p className="fs-5">¡Que tenemos preparadas para ti!</p>
            </div>

            {/* Sección de playlists */}
            <section className="mt-2">
                <div className="container">

                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-column flex-lg-row flex-wrap justify-content-start">
                                <Playlist title="Reggueton" />
                                <Playlist title="Pop latino" />
                                <Playlist title="Rap urbano" />
                            </div>
                        </div>
                    </div>

                    <div className="container mb-3">
                        <div className="row">
                            <div className="col d-flex flex-column flex-lg-row flex-wrap justify-content-start">
                                <Playlist title="Salsa" />
                                <Playlist title="Cumbia" />
                                <Playlist title="Baladas en ingles" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}