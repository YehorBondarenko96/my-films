import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { selectFilms } from "../../redux/selectors";
import css from './DetailsFilm.module.css';
import { selectScreenOrient } from "../../redux/selectors";
import { ManipButs } from "components/ManipButs/ManipButs";

const DetailsFilm = () => {
    const screenOrient = useSelector(selectScreenOrient);
    const location = useLocation();
    const [backLocation] = useState(location.state?.from ?? '/');
    const {filmId} = useParams();
    const allFilms = useSelector(selectFilms);
    const film = allFilms.find(f => f._id === filmId);

    const allDivDetFilmRef = useRef(null);
    const firstDivDetInfRef = useRef(null);
    const imgDetFilmRef = useRef(null);

    useEffect(() => {
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        const coef = 2.3;

        if (firstDivDetInfRef.current && imgDetFilmRef.current) {
            const firstDivDetInf = firstDivDetInfRef.current;
            const imgDetFilm = imgDetFilmRef.current;

            firstDivDetInf.style.width = screenWidth / (coef * 0.5) + 'px';
            firstDivDetInf.style.height = screenWidth / coef + 'px';
            firstDivDetInf.style.padding = screenWidth / (coef * 20) + 'px';
            firstDivDetInf.style.gap = screenWidth / (coef * 20) + 'px';
            imgDetFilm.style.width = screenWidth / (coef * 1.5) + 'px';
            imgDetFilm.style.height = screenWidth / coef + 'px';
        }
        

        if (allDivDetFilmRef.current) {
            const allDivDetFilm = allDivDetFilmRef.current;

            const handelEsc = (e) => { 
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    const closeModal = () => { 
        document.removeEventListener('keydown', handelEsc);
        allDivDetFilm.removeEventListener('click', handelClickAllDiv);

        window.location.href = backLocation;
    };

    const handelClickAllDiv = (e) => {
        if (e.target.classList.contains(css.allDivDetFilm)) {
            closeModal();
        }
    };

            allDivDetFilm.addEventListener('click', handelClickAllDiv);
            // document.addEventListener('keydown', handelEsc);

        }
    });

    return (
        <div ref={allDivDetFilmRef} className={css.allDivDetFilm}>
            <div ref={firstDivDetInfRef} className={css.firstDivDetInf}>
                {film && <>
                    <img ref={imgDetFilmRef} className={css.imgDetFilm} src={film.image} alt={film.title} />
                    <div className={css.divPInfManBut}>
                        <div className={css.divPInfDetInf}>
                <p><span className={css.nameCatDitInf}>Description: </span>{film.description}</p>
                <p><span className={css.nameCatDitInf}>Actors: </span>{film.actors.join(', ')}</p>
                <p><span className={css.nameCatDitInf}>Director: </span>{film.director}</p>
                <p><span className={css.nameCatDitInf}>Genre: </span>{film.genre.join(', ')}</p>
                <p><span className={css.nameCatDitInf}>Rating: </span>{film.rating}</p>
                    </div>
                    <div>
                        <ManipButs film={film} coef='1.5'/>
                    </div>
                    </div>
            </>}
            </div>
        </div>
    )
};

export default DetailsFilm