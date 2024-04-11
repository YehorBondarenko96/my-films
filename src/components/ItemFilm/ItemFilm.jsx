import css from '../Styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { selectScreenOrient } from "../../redux/selectors";
import { updateStatusFilm } from '../../redux/opertions';


export const ItemFilm = ({ film, index, id, activeId }) => {
    const disp = useDispatch();
    const screenOrient = useSelector(selectScreenOrient);


    const firstDivItemFilmRef= useRef(null);
    const divItemFilmRef = useRef(null);
    const buttonFavRef = useRef(null);
    const divPItemFilmsRef = useRef(null);
    const divInfoItemFilmsRef = useRef(null);

    const rewriteDate = (date) => {
        const dateObj = new Date(date);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;
        return formattedDate
    };

    const handelClickFavBut = () => {
        if (film.favorite) {
            disp(updateStatusFilm({id: film._id, favorite: false}))
        } else {
            disp(updateStatusFilm({id: film._id, favorite: true}))
        }
    };

    useEffect(() => {
        const coef = 2;
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        if (firstDivItemFilmRef.current && divItemFilmRef.current && buttonFavRef.current &&
            divPItemFilmsRef.current && divInfoItemFilmsRef.current) {
            const firstDivItemFilm = firstDivItemFilmRef.current;
            const divItemFilm = divItemFilmRef.current;
            const buttonFav = buttonFavRef.current;
            const divPItemFilms = divPItemFilmsRef.current;
            const divInfoItemFilms = divInfoItemFilmsRef.current;

            firstDivItemFilm.style.borderRadius = screenWidth/(coef * 44) + 'px';
            divItemFilm.style.borderRadius = screenWidth/(coef * 44) + 'px';
            divItemFilm.style.textShadow = screenWidth / (coef * 250) + 'px ' + screenWidth / (coef * 250) + 'px ' + screenWidth / (coef * 100) + 'px black';
            divItemFilm.style.padding = screenWidth/(coef * 50) + 'px';
        
            
            buttonFav.style.right = screenWidth/(coef * 22) + 'px';
            buttonFav.style.width = screenWidth/(coef * 20) + 'px';
            buttonFav.style.height = screenWidth / (coef * 20) + 'px';
            
            divPItemFilms.style.fontSize = screenWidth / (coef * 38) + 'px';
            divInfoItemFilms.style.marginTop = screenWidth / (coef * 4) + 'px'
        } 
        // else if (id === activeId && firstDivItemFilm && divItemFilm && buttonCall) {
        //     firstDivItemFilm.style.borderRadius = screenWidth/(coef * 44) * 1.4 + 'px';
        //     divItemFilm.style.borderRadius = screenWidth/(coef * 44) * 1.4 + 'px';
        //     divItemFilm.style.textShadow = screenWidth/(coef * 250) + 'px' + screenWidth/(coef * 250) + 'px' + screenWidth/(coef * 100) + 'px black';
        //     buttonCall.style.bottom = screenWidth/(coef * 22) * 1.4 + 'px';
        //     buttonCall.style.left = screenWidth/(coef * 22) * 1.4 + 'px';
        //     buttonCall.style.width = screenWidth/(coef * 13) * 1.4 + 'px';
        //     buttonCall.style.height = screenWidth/(coef * 13) * 1.4 + 'px';
        // }
    }, [activeId, id, screenOrient]);

    return(
        <div ref={firstDivItemFilmRef} className={[css.firstDivItemFilm, 'firstDivItemFilm'].join(' ')}
        style={{
            backgroundImage: `url(${film.image})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
                <div ref={divItemFilmRef} className={[css.divItemFilm, 'divItemFilm'].join(' ')}>
                <div ref={divInfoItemFilmsRef} className={css.divInfoItemFilms}>
                    <h2 className={css.hItemFilmsName}>{film.title}</h2> 
                <div ref={divPItemFilmsRef}>
                    <p className={css.pItemFilmsNumber}>Rating: {film.rating}</p>
                    <p className={css.pItemFilmsNumber}>Release date: {rewriteDate(film.release_date)}</p>
                </div>
                    </div>
                <button
                    ref={buttonFavRef}
                    type='button'
                    className={[css.buttonFav, film.favorite ? css.isFavBut : css.notFavBut, 'buttonFav'].join(' ')}
                    onClick={handelClickFavBut}
                >
                        Favorite
                    </button>
                </div>
        </div>
    )
}