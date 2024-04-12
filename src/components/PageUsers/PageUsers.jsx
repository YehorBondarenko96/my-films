import { Filter } from 'components/Filter/Filter';
import { FilmList } from 'components/FilmList/FilmList';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../redux/workWithBackend/selectors';
import { setToken } from '../../redux/workWithBackend/slice';
import css from './PageUsers.module.css';
import { useEffect } from 'react';

const PageUsers = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const firstToken = new URLSearchParams(window.location.search).get('token');
    
    useEffect(() => {
        if (firstToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${firstToken}`;
        dispatch(setToken(firstToken));
    } else {
        if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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