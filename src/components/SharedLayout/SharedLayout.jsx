import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Navigation } from "../Navigation/Navigation";
import css from './SharedLayout.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectRegistEnded, selectIsLoggedIn } from "../../redux/workWithBackend/selectors";
import UserMenu from "../UserMenu/UserMenu";
import { setScreenOrientation } from "../../redux/filmsSlice";
import { selectSecError } from "../../redux/selectors";
import { VerifyWindow } from "../VerifyWindow/VerifyWindow";
import { ToastContainer, toast } from 'react-toastify';
import { cleanError } from '../../redux/workWithBackend/slice';
import { selectError } from '../../redux/workWithBackend/selectors';

export const SharedLayout = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const regEnd = useSelector(selectRegistEnded);
    const error = useSelector(selectError);
    const secError = useSelector(selectSecError);


    const forOrientation = () => {
        setTimeout(() => {
                dispatch(setScreenOrientation(window.innerWidth));
        }, 100);
    };

    forOrientation();

    window.removeEventListener('orientationchange', forOrientation);

    useEffect(() => {
        window.addEventListener('orientationchange', forOrientation);
    });

    useEffect(() => {
        if (error) { toast.error(`${error}`) };
        if (secError) { toast.error(`${secError}`) };
        
            dispatch(cleanError());
    }, [error, secError, dispatch]);

    return(
        <>
            {regEnd && <VerifyWindow/>}
            <header className={css.headerSharedLayout}>
                <Navigation/>
                {isLoggedIn && <UserMenu/>}
            </header>
            <main>
                <div className={[css.divForAllMain, 'divForAllMain'].join(' ')}>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
                </div>
            </main>
            <ToastContainer />
        </>
    )
}