import css from './ActiveItemFilm.module.css'
import { selectScreenOrient } from "../../redux/selectors";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { ChangingCWindow } from '../ChangingCWindow/ChangingCWindow';
import { deleteFilm } from '../../redux/opertions';
import { deleteNumb } from '../../redux/backgroundImgSlice';
import { setScrollLeftLists } from '../../redux/filmsSlice';




export const ActiveItemFilm = ({ film }) => {
    const dispatch = useDispatch();

    const screenOrient = useSelector(selectScreenOrient);
    const [activeChanging, setActiveChenging] = useState(false);
    
    const allDivActItFilmRef = useRef(null);
    const imgActItFilmRef = useRef(null);
    const buttonChRef = useRef(null);
    const buttonDelRef = useRef(null);

    const closeChangingCWindow = () => { setActiveChenging(false) };
    
    const forClickUpdBut = () => {
        setTimeout(() => {
            setActiveChenging(true)
        }, 400);
    };

    const updateStateForDelete = () => {
        const idFilm = film._id;
        dispatch(deleteFilm(idFilm));
        dispatch(deleteNumb());
        const filmsList = document.querySelector('.listFilmsForGap');
        const scrollUl = filmsList.scrollLeft;
        dispatch(setScrollLeftLists(scrollUl));
        };

    useEffect(() => {
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        const coef = 2.3;

        if (allDivActItFilmRef.current && imgActItFilmRef.current && buttonChRef.current && buttonDelRef.current) {
            const allDivActItFilm = allDivActItFilmRef.current;
            const imgActItFilm = imgActItFilmRef.current;
                const buttonCh = buttonChRef.current;
                const buttonDel = buttonDelRef.current;

            allDivActItFilm.style.borderRadius = screenWidth / (coef * 44) + 'px';
            imgActItFilm.style.borderRadius = `${screenWidth / (coef * 44)}px ${screenWidth / (coef * 44)}px 0 0`;
            buttonCh.style.top = screenWidth/(coef * 22) + 'px';
            buttonCh.style.left = screenWidth/(coef * 22) + 'px';
            buttonDel.style.top = screenWidth/(coef * 22) + 'px';
            buttonDel.style.right = screenWidth/(coef * 22) + 'px';
            buttonDel.style.width = screenWidth/(coef * 13) + 'px';
            buttonDel.style.height = screenWidth/(coef * 13) + 'px';
            buttonCh.style.width = screenWidth/(coef * 13) + 'px';
            buttonCh.style.height = screenWidth / (coef * 13) + 'px';
        }
    });

    return (
        <div ref={allDivActItFilmRef} className={css.allDivActItFilm}>
            <img ref={imgActItFilmRef} className={css.imgActItFilm} src={`${film.image}`} alt={`${film.title}`} />
            <button ref={buttonDelRef} id={film._id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                        Delete
                    </button>
            <button ref={buttonChRef} type='button' className={css.changeCBut} onClick = {forClickUpdBut}>
                        Change contact
                </button>
            {activeChanging && 
                    <ChangingCWindow 
                    closeChangingCWindow = {closeChangingCWindow} 
                    name = {film.title}
                    number = {film.rating}
                    id = {film._id}
                    />}
        </div>
    )
};