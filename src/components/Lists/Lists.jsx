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
            {(allFilms.length > 0) ?
            (<>
            <FilmList
                allFilms={allFilms}
                title='Catalogue'
            />
            {filter.length === 0 && 
                <>
                    {(arrSelected.length > 0) &&
                        <FilmList
                allFilms={arrSelected}
                title='My list'
            />
                }
                    {(arrPlayed.length > 0) &&
                        <FilmList
                allFilms={arrPlayed}
                title='Viewed'
                />
                }
                </>
            }
                </>) : (
        <h2 style={{ padding: '20px' }}>Oopsss...Something went wrong...</h2>
                    
        )
        }
        </>
    )
};