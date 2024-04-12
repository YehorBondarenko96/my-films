import css from './Home.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/workWithBackend/selectors';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        <div className={css.allDivHome}>
        <div className={css.greetingHome}>
            <h1 className={css.hlHome}>MyFilms</h1>
            <svg className={css.logoHome}>
            <use
            ></use>
            </svg>
        <h2 className={css.hllGreetingHome}>Welcome to </h2>
        <span className={css.logoNameGreetingHome}>
            <span className={css.letterHome}>M</span>y<span className={css.letterHome}>F</span>ilms
            </span>
        <p className={css.sloganHome}>Your personal film library</p>
        </div>
        <div className={css.buttonsHome}>
        {isLoggedIn ? (
            <Link to={'/films'}>
                <button className={css.buttonHome}>Log in</button>
            </Link>
        ) : (
            <>
            <Link to={'/login'}>
            <button className={css.buttonHome}>Log in</button>
            </Link>
            <Link to={'/register'}>
            <button className={css.buttonHome}>Sign in</button>
            </Link>
            </>
        )}
        </div>
        </div>
    )
};

export default Home;