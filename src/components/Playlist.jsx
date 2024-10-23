import "../assets/css/Playlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export const Playlist = ({ title }) => {
    return (
        <div className="col-12 col-lg-4 mt-3 mt-lg-0">
            <div className="card m-2">
                <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <FontAwesomeIcon className="fs-3" icon= { faMusic } />
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <a href="#" className="btn btn-danger mt-2 mt-md-0">Ver playlist</a>
                </div>
            </div>
        </div>
    )
}