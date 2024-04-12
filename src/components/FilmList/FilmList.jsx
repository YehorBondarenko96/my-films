import css from '../Styles.module.css';
import { UlForCL } from 'components/UlForCL/UlForCL';
import { selectIsLoading, selectSecError } from '../../redux/selectors';
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";


export const FilmList = ({allFilms, title}) => {
    const realScreenWidth = window.innerWidth;
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectSecError);

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
        {(error || allFilms.length === 0) ? (
        <h2>Oopsss...Something went wrong...</h2>
        ) : (
        <div id='divForFilmList' className={css.divForFilmList}
        style={{
            paddingLeft: varPadding,
            paddingRight: varPadding,
        }}
                    >
                        <h2>{title}</h2>
                        {isLoading && !error ? <Loader /> : <UlForCL allFilms={allFilms} />}
            </div>
            )}
        </div>
    )
}