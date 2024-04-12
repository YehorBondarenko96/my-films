import { FilmList } from "components/FilmList/FilmList";
import { useSelector } from "react-redux";
import { selectFilms, selectFilter } from "../../redux/selectors";
import { selectPlayed, selectSelected } from "../../redux/workWithBackend/selectors";

export const Lists = () => { 
    const allFilms = useSelector(selectFilms);
    const filter = useSelector(selectFilter);
    const arrPlayed = useSelector(selectPlayed);
    const arrSelected = useSelector(selectSelected);


    return (
        <>
            <FilmList
                allFilms={allFilms}
                title='Catalogue'
            />
            {filter.length === 0 && 
                <>
                <FilmList
                allFilms={arrSelected}
                title='My list'
            />
                <FilmList
                allFilms={arrPlayed}
                title='Viewed'
                />
                </>
            }
        </>
    )
};