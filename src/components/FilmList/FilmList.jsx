import css from '../Styles.module.css';
import { UlForCL } from 'components/UlForCL/UlForCL';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { useEffect } from "react";
import { fetchFilms } from "../../redux/opertions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { selectToken } from '../../redux/workWithBackend/selectors';
import axios from 'axios';


export const FilmList = () => {
    const realScreenWidth = window.innerWidth;
    const token = useSelector(selectToken);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            dispatch(fetchFilms());
        }
    }, [dispatch, token]);

    let varPadding = 20;
    if(realScreenWidth > 1000){
        varPadding = 50;
    } else if(realScreenWidth > 500 && realScreenWidth <=1000){
        varPadding = realScreenWidth/20;
    } else{
        varPadding = realScreenWidth/40;
    }

    return(
        <div className={[css.allDivFilmList, 'allDivFilmList'].join(' ')}>
        {error ? (
        <h2>Oopsss...Something went wrong...</h2>
        ) : (
        <div id='divForFilmList' className={css.divForFilmList}
        style={{
            paddingLeft: varPadding,
            paddingRight: varPadding,
        }}
        >
                {isLoading && !error ? <Loader /> : <UlForCL />}
            </div>
            )}
        </div>
    )
}