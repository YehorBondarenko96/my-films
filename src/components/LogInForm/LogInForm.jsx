import css from './LogInForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/workWithBackend/operations';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const LogInForm = () => {
    const dispatch = useDispatch();
    const [realScreenWidth, setRealScreenWidth] = useState(null);

    useEffect(() => {
        setRealScreenWidth(window.innerWidth);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(logIn({email, password}));
    };

    return(
        <div className={css.divLogInForm}>
            <h2 className={css.titleLogInForm}>Log in your <span className={css.logoNameGreetingLogInForm}>
            <span className={css.letterLogInForm}>M</span>y<span className={css.letterLogInForm}>F</span>ilms
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
                placeholder={realScreenWidth > 550 ? "Please, enter your email" : "Enter your email"} />
                </label>
                <label className={css.labelLogInForm}>
                    <span className={css.pLogInForm}>Password</span>
                <input className={css.inputLogInForm} 
                name='password'
                type="password"
                autoComplete="off"
                autoFocus
                placeholder= {realScreenWidth > 550 ? "Please, enter your password" : "Enter your password"} 
                />
                </label>
                <button className={css.buttonLogInForm} type="submit">Sign in</button>
            </form>
            </div>
    )
};

export default LogInForm;