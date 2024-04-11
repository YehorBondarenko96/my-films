import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsEmail } from '../../redux/workWithBackend/selectors';
import { logOut } from '../../redux/workWithBackend/operations';
import { Link } from 'react-router-dom';

const UserMenu = () => {
    const usEmail = useSelector(selectUsEmail);
    const dispatch = useDispatch();
    return(
        <div className={css.divUserMenu}>
            <p className={css.pUserMenu}>{usEmail}</p>
            <Link to={'/'}>
            <button className={css.buttonUserMenu} onClick={() => {dispatch(logOut())}}>Log out</button>
            </Link>
        </div>
    )
};

export default UserMenu;