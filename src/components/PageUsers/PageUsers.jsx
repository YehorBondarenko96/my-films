import { Filter } from 'components/Filter/Filter';
import { FilmList } from 'components/FilmList/FilmList';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUsId } from '../../redux/workWithBackend/selectors';
import { setToken } from '../../redux/workWithBackend/slice';
import css from './PageUsers.module.css';
import { useEffect } from 'react';
import { fetchFilms } from "../../redux/opertions";
import { findUser } from '../../redux/workWithBackend/operations';

const PageUsers = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const userId = useSelector(selectUsId);
    const firstToken = new URLSearchParams(window.location.search).get('token');
    
    useEffect(() => {
        if (firstToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${firstToken}`;
            dispatch(setToken(firstToken));
            dispatch(fetchFilms());
            if (userId) {
                dispatch(findUser(userId));
            };
    } else {
            if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            dispatch(fetchFilms());
            if (userId) {
                dispatch(findUser(userId));
            };
        }
    }
    });

    return(
        <>
        <div className={css.divContFiltPageUsers}>
        <Filter />
        </div>
        <FilmList />
        </>
    )
};

export default PageUsers;