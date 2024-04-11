import css from './Home.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/workWithBackend/selectors';
import { useEffect } from 'react';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.height = '100%';
        const root = document.querySelector('#root');
        root.style.height = '100%';
        const html = document.querySelector('html');
        html.style.height = '100%';
        const realScreenHeight = window.innerHeight;
            if(realScreenHeight < 425){
                body.style.height = 'auto';
                root.style.height = 'auto';
                html.style.height = 'auto';
            }
    });

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
            <Link to={'/contacts'}>
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