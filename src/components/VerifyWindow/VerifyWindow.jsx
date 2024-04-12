import css from './VerifyWindow.module.css';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectScreenOrient, selectEmail } from "../../redux/selectors";
import { verifyEmail, delUser } from '../../redux/workWithBackend/operations';
import { setRegistEnded } from '../../redux/workWithBackend/slice';
import { selectUsId } from '../../redux/workWithBackend/selectors';


export const VerifyWindow = () => {
    const dispatch = useDispatch();
    const screenOrient = useSelector(selectScreenOrient);
    const email = useSelector(selectEmail);
    const usId = useSelector(selectUsId);

    const allDivVerWindRef = useRef(null);
    const pVerWindRef = useRef(null);
    const buttonVarWindRef = useRef(null);

    const handelButClick = () => {
        dispatch(verifyEmail({email}));
    };

    const handelDivClick = (e) => { 
        if (!e.target.classList.contains(css.buttonVarWind) && usId) {
            dispatch(setRegistEnded(false));
            dispatch(delUser(usId));
        }
    };

    useEffect(() => {
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        if (allDivVerWindRef.current && pVerWindRef.current && buttonVarWindRef.current) {
            const allDivVerWind = allDivVerWindRef.current;
            const pVerWind = pVerWindRef.current;
            const buttonVarWind = buttonVarWindRef.current;
            allDivVerWind.style.gap = `${screenWidth / 20}px`;
            pVerWind.style.fontSize = `${screenWidth / 27}px`;
            buttonVarWind.style.fontSize = `${screenWidth / 42}px`;
            buttonVarWind.style.borderRadius = `${screenWidth / 50}px`;
            buttonVarWind.style.width = `${screenWidth / 4}px`;
            buttonVarWind.style.height = `${screenWidth / 12.5}px`;

            allDivVerWind.addEventListener('click', handelDivClick);
        }
    });

    return (
        <div ref={allDivVerWindRef} className={css.allDivVerWind}>
            <p ref={pVerWindRef} className={css.pVerWind}><b>Please, go to your email for verification.</b></p>
            <button
                ref={buttonVarWindRef}
                className={css.buttonVarWind}
                type='button'
                onClick={handelButClick}
            >
                Send the letter for validation again
            </button>
        </div>
    )
};