import css from './RegisterForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/workWithBackend/operations';
import { selectError } from '../../redux/workWithBackend/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { cleanError } from '../../redux/workWithBackend/slice';
import { setRegistEnded, setEmail } from '../../redux/filmsSlice';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const [realScreenWidth, setRealScreenWidth] = useState(null);

    useEffect(() => {
        setRealScreenWidth(window.innerWidth);
        if (error) {
            if (Number(error) === 400) { toast.error('Invalid registration data') };
            dispatch(setRegistEnded(false));
        };
            dispatch(cleanError());
    }, [error, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.currentTarget.elements.name.value;
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(register({ name, email, password }));
        dispatch(setRegistEnded(true));
        dispatch(setEmail(email));
    };

    // useEffect(() => {
    //     const body = document.querySelector('body');
    //     body.style.height = '100%';
    //     const root = document.querySelector('#root');
    //     root.style.height = '100%';
    //     const html = document.querySelector('html');
    //     html.style.height = '100%';
    //     const realScreenHeight = window.innerHeight;
    //         if((realScreenHeight < 540 && realScreenHeight > 520) ||
    //             (realScreenHeight < 450)){
    //             body.style.height = 'auto';
    //             root.style.height = 'auto';
    //             html.style.height = 'auto';
    //         }
    // });

    return(
        <div className={css.divRegisterForm}>
            <h2 className={css.titleRegisterForm}>Registration in <span className={css.logoNameGreetingRegisterForm}>
            <span className={css.letterRegisterForm}>M</span>y<span className={css.letterRegisterForm}>F</span>ilms
            </span></h2>
            <form className={css.registerForm} onSubmit={handleSubmit}>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Name</span>
                <input className={css.inputRegisterForm} 
                name='name'
                type="text"
                autoFocus
                placeholder="Please, enter your name" />
                </label>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Email</span>
                <input className={css.inputRegisterForm} 
                name='email'
                type="email"
                autoComplete="off"
                autoFocus
                placeholder="Please, enter your email" />
                </label>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Password</span>
                <input className={css.inputRegisterForm} 
                name='password'
                type="password"
                autoComplete="off"
                autoFocus
                placeholder= {realScreenWidth > 550 ? "The password must consist of at least 7 characters" : "Password: min. 7 chars."} 
                />
                </label>
                <button className={css.buttonRegisterForm} type="submit">Registration</button>
            </form>
            <ToastContainer />
            </div>
    )
};

export default RegisterForm;