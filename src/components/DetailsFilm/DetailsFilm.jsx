import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFilms } from "../../redux/selectors";

const DetailsFilm = () => {
    const {filmId} = useParams();
    const allFilms = useSelector(selectFilms);
    const film = allFilms.find(f => f._id === filmId);

    return (
        <div>
            {film && <>
                <p><b>Description: </b>{film.description}</p>
                <p><b>Actors: </b>{film.actors.join(', ')}</p>
                <p><b>Director: </b>{film.director}</p>
                <p><b>Genre: </b>{film.genre.join(', ')}</p>
                <p><b>Rating: </b>{film.rating}</p>
            </>}
        </div>
    )
};

export default DetailsFilm