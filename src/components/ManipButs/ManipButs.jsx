import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectScreenOrient } from "../../redux/selectors";
import { Link } from "react-router-dom";
import css from './ManipButs.module.css';
import { selectPlayed, selectSelected, selectUsId } from "../../redux/workWithBackend/selectors";
import { updatePlayed, updateSelected } from "../../redux/workWithBackend/operations";
import { setScrollLeftLists } from '../../redux/filmsSlice';

export const ManipButs = ({film, coef}) => { 
    const disp = useDispatch();
    const screenOrient = useSelector(selectScreenOrient);
    const arrPlayed = useSelector(selectPlayed);
    const arrSelected = useSelector(selectSelected);
    const userId = useSelector(selectUsId);

    const isPlayed = arrPlayed.some(f => f.id === film.id);
    const isSelected = arrSelected.some(f => f.id === film.id);

    const ulButActItRef = useRef(null);
    const buttonPlayRef = useRef(null);
    const buttonDetRef = useRef(null);
    const buttonSelRef = useRef(null);
    const buttonDelRef = useRef(null);

    const forClickPlayBut = () => {
        const filmsList = document.querySelector('.listFilmsForGap');
        const scrollUl = filmsList.scrollLeft;
        disp(setScrollLeftLists(scrollUl));
        let newPlayed = [];
        if (isPlayed) {
            newPlayed = arrPlayed.filter(f => f.id !== film.id);
        } else {
            newPlayed = [...arrPlayed, film]; 
        }
        const dataForUpdPlayed = {
                id: userId,
                played: newPlayed
            };
            disp(updatePlayed(dataForUpdPlayed));
    };

    const forClickSelectBut = () => {
        const filmsList = document.querySelector('.listFilmsForGap');
        const scrollUl = filmsList.scrollLeft;
        disp(setScrollLeftLists(scrollUl));
        let newSelected = [];
        if (isSelected) {
            newSelected = arrSelected.filter(f => f.id !== film.id);
        } else {
            newSelected = [...arrSelected, film]; 
        }
        const dataForUpdSel = {
                id: userId,
                selected: newSelected
            };
            disp(updateSelected(dataForUpdSel));
    };

    useEffect(() => {
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        if(ulButActItRef.current && buttonPlayRef.current && buttonDetRef.current &&
            buttonSelRef.current && buttonDelRef.current) {
            const ulButActIt = ulButActItRef.current;
            const buttonPlay = buttonPlayRef.current;
            const buttonDet = buttonDetRef.current;
            const buttonSel = buttonSelRef.current;
            const buttonDel = buttonDelRef.current;

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
        <>
            <ul ref={ulButActItRef} className={css.ulButActIt}>
                <li>
                    <button
                ref={buttonPlayRef}
                id={film._id}
                className={[css.butActIt, isPlayed ? css.isPlayButPlay : css.notPlayButPlay].join(' ')}
                type='button'
                onClick={forClickPlayBut}
            >
                        Play
            </button>
                </li>
                <li>
                    <button
                ref={buttonSelRef}
                type='button'
                className={[css.butActIt, isSelected ? css.isFavBut : css.notFavBut].join(' ')}
            onClick={forClickSelectBut}
            >
                        Selected
            </button>
            </li>
                    <li>
                            <Link to={`/films/${film.id}`} state={{from: window.location.href}}>
                        
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
        </>
    )
};