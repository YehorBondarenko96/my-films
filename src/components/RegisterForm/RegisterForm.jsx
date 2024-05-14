import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/workWithBackend/operations';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { setEmail } from '../../redux/filmsSlice';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [realScreenWidth, setRealScreenWidth] = useState(null);

    useEffect(() => {
        setRealScreenWidth(window.innerWidth);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.currentTarget.elements.name.value;
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(register({ name, email, password }));
        dispatch(setEmail(email));
    };

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
                placeholder={realScreenWidth > 550 ? "Please, enter your name" : "Enter your name"} />
                </label>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Email</span>
                <input className={css.inputRegisterForm} 
                name='email'
                type="email"
                autoComplete="off"
                autoFocus
                placeholder={realScreenWidth > 550 ? "Please, enter your email" : "Enter your email"} />
                </label>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Password</span>
                <input className={css.inputRegisterForm} 
                name='password'
                type="password"
                autoComplete="off"
                autoFocus
                placeholder= {realScreenWidth > 550 ? "Please, enter your password" : "Enter your password"} 
                />
                </label>
                <button className={css.buttonRegisterForm} type="submit">Registration</button>
            </form>
            </div>
    )
};

export default RegisterForm;