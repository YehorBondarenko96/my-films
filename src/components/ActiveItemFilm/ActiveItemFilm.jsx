import css from './ActiveItemFilm.module.css'
import { selectScreenOrient } from "../../redux/selectors";
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { ManipButs } from 'components/ManipButs/ManipButs';

export const ActiveItemFilm = ({ film, bigWidth }) => {
    const screenOrient = useSelector(selectScreenOrient);
    
    const allDivActItFilmRef = useRef(null);
    const infoActItRef = useRef(null);

    useEffect(() => {
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        const coef = 2.3;

        if (allDivActItFilmRef.current && infoActItRef.current) {
            const allDivActItFilm = allDivActItFilmRef.current;
            const infoActIt = infoActItRef.current;
            

            allDivActItFilm.style.borderRadius = screenWidth / (coef * 44) + 'px';
            allDivActItFilm.style.width = bigWidth + 'px';
            infoActIt.style.borderRadius = `0 0 ${screenWidth / (coef * 44)}px ${screenWidth / (coef * 44)}px`;
            infoActIt.style.padding = screenWidth / (coef * 50) + 'px';
            infoActIt.style.paddingBottom = screenWidth / (coef * 25) + 'px';
        }
    });

    return (
        <div ref={allDivActItFilmRef} className={css.allDivActItFilm}
            style={{ backgroundImage: `url(${film.image})` }}>
            <div ref={infoActItRef} className={css.infoActIt}>
                <h2 className={css.hActIt}>{film.title}</h2>
                <ManipButs film={film} coef='2.3'/>
            </div>
        </div>
    )
};