import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsName } from '../../redux/workWithBackend/selectors';
import { logOut } from '../../redux/workWithBackend/operations';
import { Link } from 'react-router-dom';
import { setIsLoggedIn } from '../../redux/workWithBackend/slice';

const UserMenu = () => {
    const usName = useSelector(selectUsName);
    const dispatch = useDispatch();

    const handelClickLogOut = () => {
        dispatch(logOut());
        dispatch(setIsLoggedIn(false));
    };

    return(
        <div className={css.divUserMenu}>
            <p className={css.pUserMenu}>{usName}</p>
            <Link to={'/'}>
            <button className={css.buttonUserMenu} onClick={handelClickLogOut}>Log out</button>
            </Link>
        </div>
    )
};

export default UserMenu;