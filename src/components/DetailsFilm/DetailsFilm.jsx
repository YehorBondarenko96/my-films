import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectFilms } from "../../redux/selectors";
import css from './DetailsFilm.module.css';

const DetailsFilm = () => {
    const location = useLocation();
    const [backLocation] = useState(location.state?.from ?? '/');
    const {filmId} = useParams();
    const allFilms = useSelector(selectFilms);
    const film = allFilms.find(f => f._id === filmId);

    const handelClickAllDiv = () => {
        window.location.href = backLocation;
    };

    return (
        <div className={css.allDivDetFilm} onClick={handelClickAllDiv}>
            {film && <>
                <p><b>Description: </b>{film.description}</p>
                <p><b>Actors: </b>{film.actors.join(', ')}</p>
                <p><b>Director: </b>{film.director}</p>
                <p><b>Genre: </b>{film.genre.join(', ')}</p>
                <p><b>Rating: </b>{film.rating}</p>
            </>}
        </div>
    )
};

export default DetailsFilm