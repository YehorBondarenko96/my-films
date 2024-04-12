import css from './ActiveItemFilm.module.css'
import { selectScreenOrient } from "../../redux/selectors";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

// import { deleteFilm } from '../../redux/opertions';
// import { deleteNumb } from '../../redux/backgroundImgSlice';
// import { setScrollLeftLists } from '../../redux/filmsSlice';




export const ActiveItemFilm = ({ film }) => {
    const dispatch = useDispatch();

    const screenOrient = useSelector(selectScreenOrient);
    
    const allDivActItFilmRef = useRef(null);
    const infoActItRef = useRef(null);
    const ulButActItRef = useRef(null);
    const buttonPlayRef = useRef(null);
    const buttonDetRef = useRef(null);
    const buttonSelRef = useRef(null);
    const buttonDelRef = useRef(null);

    
    // const forClickUpdBut = () => {
    //     setTimeout(() => {
    //         setActiveChenging(true)
    //     }, 400);
    // };

    // const updateStateForDelete = () => {
    //     const idFilm = film._id;
    //     dispatch(deleteFilm(idFilm));
    //     dispatch(deleteNumb());
    //     const filmsList = document.querySelector('.listFilmsForGap');
    //     const scrollUl = filmsList.scrollLeft;
    //     dispatch(setScrollLeftLists(scrollUl));
    //     };

    useEffect(() => {
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        const coef = 2.3;

        if (allDivActItFilmRef.current && buttonPlayRef.current && buttonDetRef.current &&
            buttonSelRef.current && buttonDelRef.current && infoActItRef.current && ulButActItRef.current) {
            const allDivActItFilm = allDivActItFilmRef.current;
            const infoActIt = infoActItRef.current;
            const ulButActIt = ulButActItRef.current;
            const buttonPlay = buttonPlayRef.current;
            const buttonDet = buttonDetRef.current;
            const buttonSel = buttonSelRef.current;
            const buttonDel = buttonDelRef.current;

            allDivActItFilm.style.borderRadius = screenWidth / (coef * 44) + 'px';
            infoActIt.style.borderRadius = `0 0 ${screenWidth / (coef * 44)}px ${screenWidth / (coef * 44)}px`;
            infoActIt.style.padding = screenWidth / (coef * 50) + 'px';
            infoActIt.style.paddingBottom = screenWidth / (coef * 25) + 'px';
            ulButActIt.style.gap = screenWidth / (coef * 40) + 'px';
            buttonDel.style.width = screenWidth/(coef * 13) + 'px';
            buttonDel.style.height = screenWidth/(coef * 13) + 'px';
            buttonSel.style.width = screenWidth/(coef * 13) + 'px';
            buttonSel.style.height = screenWidth / (coef * 13) + 'px';
            buttonPlay.style.width = screenWidth/(coef * 13) + 'px';
            buttonPlay.style.height = screenWidth / (coef * 13) + 'px';
            buttonDet.style.width = screenWidth / (coef * 13) + 'px';
            buttonDet.style.height = screenWidth / (coef * 13) + 'px';
        }
    });

    return (
        <div ref={allDivActItFilmRef} className={css.allDivActItFilm}
            style={{ backgroundImage: `url(${film.image})` }}>
            <div ref={infoActItRef} className={css.infoActIt}>
                <h2 className={css.hActIt}>{film.title}</h2>
            <ul ref={ulButActItRef} className={css.ulButActIt}>
                <li>
                    <button
                ref={buttonPlayRef}
                id={film._id}
                className={[css.butActIt, css.buttonPlay].join(' ')}
                type='button'
                // onClick={updateStateForDelete}
            >
                        Play
            </button>
                </li>
                <li>
                    <button
                ref={buttonSelRef}
                type='button'
                className={[css.butActIt, film.favorite ? css.isFavBut : css.notFavBut].join(' ')}
            // onClick={forClickUpdBut}
            >
                        Selected
            </button>
            </li>
                    <li>
                            <Link to={`/films/${film._id}`} state={{from: window.location.href}}>
                        
                    <button
                ref={buttonDetRef}
                type='button'
                className={[css.butActIt, css.detBut].join(' ')}
            >
                        Details
                            </button>
                            </Link>
            </li>
                <li>
                    <button
                ref={buttonDelRef}
                id={film._id}
                className={[css.butActIt, css.buttonDelete].join(' ')}
                type='button'
                // onClick={updateStateForDelete}
            >
                        Delete
            </button>
            </li>
            </ul>
            </div>
        </div>
    )
};