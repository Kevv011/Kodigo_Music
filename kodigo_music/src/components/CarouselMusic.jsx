import { Carousel } from 'react-bootstrap';
import disco1 from '../assets/img/01-disco.png';
import disco2 from '../assets/img/02-disco.png';
import disco3 from '../assets/img/03-disco.png';
import disco4 from '../assets/img/04-disco.png';
import disco5 from '../assets/img/05-disco.png';
import disco6 from '../assets/img/06-disco.png';

export const CarouselMusic = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <img
                        className="img-fluid rounded mx-2"
                        src={disco1}
                        alt="Primera imagen"
                        width="500px"
                    />
                    <img
                        className="img-fluid rounded mx-2 mt-3 mt-md-0"
                        src={disco2}
                        alt="Segunda imagen"
                        width="500px"
                    />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <img
                        className="img-fluid rounded mx-2"
                        src={disco3}
                        alt="Tercera imagen"
                        width="500px"
                    />
                    <img
                        className="img-fluid rounded mx-2 mt-3 mt-md-0"
                        src={disco4}
                        alt="Cuarta imagen"
                        width="500px"
                    />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <img
                        className="img-fluid rounded mx-2"
                        src={disco5}
                        alt="Quinta imagen"
                        width="500px"
                    />
                    <img
                        className="img-fluid rounded mx-2 mt-3 mt-md-0"
                        src={disco6}
                        alt="Sexta imagen"
                        width="500px"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};
