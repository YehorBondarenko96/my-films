import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectScreenOrient } from "../../redux/selectors";
import { Link } from "react-router-dom";
import css from './ManipButs.module.css';
import { selectPlayed, selectSelected, selectUsId, selectFavorite } from "../../redux/workWithBackend/selectors";
import { updateFavorite, updatePlayed, updateSelected } from "../../redux/workWithBackend/operations";
import { setScrollLeftLists } from '../../redux/filmsSlice';

export const ManipButs = ({film, coef}) => { 
    const disp = useDispatch();
    const screenOrient = useSelector(selectScreenOrient);
    const arrPlayed = useSelector(selectPlayed);
    const arrSelected = useSelector(selectSelected);
    const arrFavorite = useSelector(selectFavorite);
    const userId = useSelector(selectUsId);
    const [detInfoOpen, setDetInfoOpen] = useState(false);
    const [manipURL, setManipURL] = useState(null);

    const isPlayed = arrPlayed.some(f => f.id === film.id);
    const isSelected = arrSelected.some(f => f.id === film.id);
    const isFavorite = arrFavorite.some(f => f.id === film.id);

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

    const forClickFavBut = () => {
        const filmsList = document.querySelector('.listFilmsForGap');
        const scrollUl = filmsList.scrollLeft;
        disp(setScrollLeftLists(scrollUl));
        let newFavorite = [];
        if (isFavorite) {
            newFavorite = arrFavorite.filter(f => f.id !== film.id);
        } else {
            newFavorite = [...arrFavorite, film]; 
        }
        const dataForUpdSel = {
                id: userId,
                favorite: newFavorite
            };
            disp(updateFavorite(dataForUpdSel));
    };

    const forClickDetBut = () => {
        console.log(1);
        const filmsList = document.querySelector('.listFilmsForGap');
        const scrollUl = filmsList.scrollLeft;
        disp(setScrollLeftLists(scrollUl));
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

    useEffect(() => {
    const actualURL = window.location.href; 
    const arrActURL = actualURL.split('/');
    if (arrActURL[arrActURL.length - 1] === '') {
        arrActURL.pop();
    }
    const lengthArrActURL = arrActURL.length;
    if (arrActURL[lengthArrActURL - 1] === 'films') {
        setDetInfoOpen(false);
        setManipURL(`/films/${film.id}`);
    } else {
        setDetInfoOpen(true);
        arrActURL.pop();
        const newURL = arrActURL.join('/');
        setManipURL(newURL);
    }
    }, [setDetInfoOpen, film]);

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
                className={[css.butActIt, isSelected ? css.isSelBut : css.notSelBut].join(' ')}
            onClick={forClickSelectBut}
            >
                        Selected
            </button>
                </li>
                <li>
                    <button
                ref={buttonDelRef}
                id={film._id}
                className={[css.butActIt, isFavorite ? css.isFavBut : css.notFavBut].join(' ')}
                type='button'
                onClick={forClickFavBut}
            >
                        Favorite
            </button>
            </li>
                    <li>
                            <Link to={manipURL} state={{from: window.location.href}}>
                        
                    <button
                ref={buttonDetRef}
                type='button'
                className={[css.butActIt, css.detBut, detInfoOpen && css.detInfoOpen].join(' ')}
                onClick={forClickDetBut}
            >
                        Details
                            </button>
                            </Link>
            </li>
            </ul>
        </>
    )
};