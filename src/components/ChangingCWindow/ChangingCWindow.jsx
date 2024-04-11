import css from './ChangingCWindow.module.css';
import { useDispatch } from 'react-redux';
import { patchFilm } from '../../redux/opertions';
import { setScrollLeftLists } from '../../redux/filmsSlice';
import { useEffect } from 'react';

export const ChangingCWindow = ({closeChangingCWindow, name, number, id }) => {
    const dispatch = useDispatch();

    const updateStateForPatch = (evt) => {
        evt.preventDefault();
        const newName = evt.currentTarget.elements.name.value;
        const idFilm = id;
        const newNumb = evt.currentTarget.elements.number.value;
        const dataForPatch = {
            id: idFilm,
            name: newName,
            number: newNumb
        }
        if(name !== newName || number !== newNumb){
        dispatch(patchFilm(dataForPatch));
        evt.currentTarget.reset();
        const filmsList = document.querySelector('.listFilmsForGap');
        const scrollUl = filmsList.scrollLeft;
        dispatch(setScrollLeftLists(scrollUl));
        } else {
            closeChangingCWindow();
        }
        };

        useEffect(() => {
            let coef = 2;
            const realScreenWidth = window.innerWidth;
            const screenWidth = realScreenWidth <= 1000 ? realScreenWidth : 1000;
            if(screenWidth < 800){
                coef = 1.5
            }
            const nameInputChangingCWindowS = document.querySelectorAll('.nameInputChangingCWindow');
            const inputChangingCWindowS = document.querySelectorAll('.inputChangingCWindow');
            const buttonsChangingCWindow = document.querySelector('.buttonsChangingCWindow');
            const buttonChangingCWindowS = document.querySelectorAll('.buttonChangingCWindow');
            const labelChangingCWindowS = document.querySelectorAll('.labelChangingCWindow');
            const formChangingCWindow = document.querySelector('.formChangingCWindow');
            if(nameInputChangingCWindowS && inputChangingCWindowS && buttonsChangingCWindow && buttonChangingCWindowS
                && labelChangingCWindowS && formChangingCWindow){
                nameInputChangingCWindowS.forEach(i => i.style.fontSize = screenWidth/(coef * 21) + 'px');
                inputChangingCWindowS.forEach(i => {
                    i.style.width = screenWidth/(coef * 1.666667) + 'px';
                    i.style.height = screenWidth/(coef * 12.5) + 'px';
                    i.style.borderRadius = screenWidth/(coef * 50) + 'px';
                    i.style.fontSize = screenWidth/(coef * 25) + 'px';
                    i.style.paddingLeft = screenWidth/(coef * 50) + 'px';
                    i.style.paddingRight = screenWidth/(coef * 50) + 'px';
                    i.style.borderWidth = screenWidth/(coef * 500) + 'px';
                });
                buttonsChangingCWindow.style.width = screenWidth/(coef * 1.666667) + 'px';
                buttonChangingCWindowS.forEach(i => {
                    i.style.height = screenWidth/(coef * 16.66667) + 'px';
                    i.style.borderRadius = screenWidth/(coef * 100) + 'px';
                    i.style.fontSize = screenWidth/(coef * 35.7) + 'px';
                });
                labelChangingCWindowS.forEach(i => i.style.gap = screenWidth/(coef * 50) + 'px');
                formChangingCWindow.style.gap = screenWidth/(coef * 25) + 'px';
                formChangingCWindow.style.borderRadius = screenWidth/(coef * 25) + 'px';
            }
        }, []);

    return(
            <form className={[css.formChangingCWindow, 'formChangingCWindow'].join(' ')} onSubmit={updateStateForPatch}>
                <label className={[css.labelChangingCWindow, 'labelChangingCWindow'].join(' ')}>
                    <span className={[css.nameInputChangingCWindow, 'nameInputChangingCWindow'].join(' ')}>Name</span>
                <input className={[css.inputChangingCWindow, 'inputChangingCWindow'].join(' ')} 
                defaultValue={name}
                type="text" 
                name="name" 
                required 
                />
                </label>
                <label className={[css.labelChangingCWindow, 'labelChangingCWindow'].join(' ')}>
                        <span className={[css.nameInputChangingCWindow, 'nameInputChangingCWindow'].join(' ')}>Number</span>
                    <input className={[css.inputChangingCWindow, 'inputChangingCWindow'].join(' ')}
                    defaultValue={number}
                    type="tel"
                    name="number" 
                    required 
                    />
                </label>
                <div className={[css.buttonsChangingCWindow, 'buttonsChangingCWindow'].join(' ')}>
                <button className={[css.buttonChangingCWindow, 'buttonChangingCWindow'].join(' ')} type="button" onClick={closeChangingCWindow}>Changen't film</button>
                <button className={[css.buttonChangingCWindow, 'buttonChangingCWindow'].join(' ')} type="submit">Change film</button>
                </div>
            </form>
    )
};