import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectScreenOrient } from "../../redux/selectors";
import { Link } from "react-router-dom";
import css from './ManipButs.module.css';

export const ManipButs = ({film, coef}) => { 
    const dispatch = useDispatch();
    const screenOrient = useSelector(selectScreenOrient);

    const ulButActItRef = useRef(null);
    const buttonPlayRef = useRef(null);
    const buttonDetRef = useRef(null);
    const buttonSelRef = useRef(null);
    const buttonDelRef = useRef(null);

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
        </>
    )
};