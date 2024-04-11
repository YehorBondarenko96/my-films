import css from './LogInForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/workWithBackend/operations';
import { selectError } from '../../redux/workWithBackend/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { cleanError } from '../../redux/workWithBackend/slice';

const LogInForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const [realScreenWidth, setRealScreenWidth] = useState(null);

    useEffect(() => {
        setRealScreenWidth(window.innerWidth);
        if(Number(error) === 400){toast.error('Invalid login credentials')};
        dispatch(cleanError());
    }, [error, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(logIn({email, password}));
    };

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
        <div className={css.divLogInForm}>
            <h2 className={css.titleLogInForm}>Log in your <span className={css.logoNameGreetingLogInForm}>
            <span className={css.letterLogInForm}>C</span>ontactHu<span className={css.letterLogInForm}>b</span>
            </span>
            </h2>
            <form className={css.logInForm} onSubmit={handleSubmit}>
                <label className={css.labelLogInForm}>
                    <span className={css.pRegLogInForm}>Email</span>
                <input className={css.inputLogInForm} 
                name='email'
                type="email"
                autoComplete="off"
                autoFocus
                placeholder="Please, enter your email" />
                </label>
                <label className={css.labelLogInForm}>
                    <span className={css.pLogInForm}>Password</span>
                <input className={css.inputLogInForm} 
                name='password'
                type="password"
                autoComplete="off"
                autoFocus
                placeholder= {realScreenWidth > 550 ? "The password must consist of at least 7 characters" : "Password: min. 7 chars."} 
                />
                </label>
                <button className={css.buttonLogInForm} type="submit">Sign in</button>
            </form>
            <ToastContainer />
            </div>
    )
};

export default LogInForm;