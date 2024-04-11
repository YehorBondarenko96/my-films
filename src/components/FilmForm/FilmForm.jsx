import { addFilm } from '../../redux/opertions';
import css from './FilmForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilms } from '../../redux/selectors';
import { useEffect } from 'react';

export const FilmForm = () => {
    const dispatch = useDispatch();
    const namesFilms = useSelector(selectFilms).map(film => film.name);

    const updateStateForAdd = (evt) => {
        evt.preventDefault();
        const newName = evt.currentTarget.elements.name.value;
        
        if(!namesFilms.some(name => name.toLowerCase() === newName.toLowerCase())){
            const newNumb = evt.currentTarget.elements.number.value;
            const dataForAdd = {
                name: newName,
                number: newNumb
            }
            dispatch(addFilm(dataForAdd));
            evt.currentTarget.reset();
            removeClasses();
        } else{
            alert(`${newName} is already in films.`)
        }
        };

        function forAddButton(){
            const modalDivFilmForm = document.querySelector('.modalDivFilmForm');
            const firstDivFilmForm = document.querySelector('.firstDivFilmForm');
            const inputNameAdd = document.querySelector('.inputNameAdd');

            modalDivFilmForm.classList.add(css.modalDivFilmFormActive);
            firstDivFilmForm.classList.add(css.firstDivFilmFormActive);
            
            setTimeout(() => {
                inputNameAdd.focus();
            }, 100);

            modalDivFilmForm.addEventListener('click', removeClasses);
            document.addEventListener('keydown', closeModalForEsc);
        };

        const closeModalForEsc = (e) => {
            if(e.key === 'Escape'){
                removeClasses();
            }
        };

        const removeClasses = (e) => {
            const modalDivFilmForm = document.querySelector('.modalDivFilmForm');
            const firstDivFilmForm = document.querySelector('.firstDivFilmForm');
            const inputsAdd = document.querySelectorAll('.inputsAdd');

            function workRC(){
                modalDivFilmForm.removeEventListener('click', removeClasses);
                document.removeEventListener('keydown', closeModalForEsc);
                inputsAdd.forEach(input => input.blur());
                modalDivFilmForm.classList.remove(css.modalDivFilmFormActive);
                firstDivFilmForm.classList.remove(css.firstDivFilmFormActive);
            };

            if(e){
            if (e.target.classList.contains(css.modalDivFilmFormActive)){
            workRC();
            };
        } else{
            workRC();
        }
        };

        useEffect(() => {
            const divForMiniFilmForm = document.querySelector('.divForMiniFilmForm');
            const firstDivFilmForm = document.querySelector('.firstDivFilmForm');
            const labelFilter = document.querySelector('.labelFilter');

            const forHoverEnter = () => {
                firstDivFilmForm.classList.add(css.divForMiniFilmFormHover);
                if(labelFilter){
                    labelFilter.style.marginRight = '155px';
                };
            };
            const forHoverLeave = () => {
                firstDivFilmForm.classList.remove(css.divForMiniFilmFormHover);
                if(labelFilter){
                    labelFilter.style.marginRight = '130px';
                };
            };

            divForMiniFilmForm.addEventListener('mouseenter', forHoverEnter);
            divForMiniFilmForm.addEventListener('mouseleave', forHoverLeave);
        });

    return (
        <div className={[css.modalDivFilmForm, 'modalDivFilmForm'].join(' ')}>
            <div className={[css.firstDivFilmForm, 'firstDivFilmForm'].join(' ')}>
                <div className={[css.divForMiniFilmForm, 'divForMiniFilmForm'].join(' ')}>
                    <button className={css.buttonAddMiniFilmForm} type='button' onClick={forAddButton}>
                        Add
                    </button>
                    </div>
                <div className={css.divFilmForm}>

                <form className={css.formFilmForm} onSubmit={updateStateForAdd}>
            <label className={css.labelFilmForm}>
                <span className={css.nameInputFilmForm}>Name</span>
            <input className={[css.inputFilmForm,'inputNameAdd', 'inputsAdd'].join(' ')} type="text" name="name" required/>
            </label>
            <label className={css.labelFilmForm}>
                <span className={css.nameInputFilmForm}>Number</span>
                <input className={[css.inputFilmForm, 'inputsAdd'].join(' ')} type="tel" name="number" required />
            </label>
            <button className={css.buttonFilmForm} type="submit">Add new film</button>
        </form>
                </div>
        </div>
        </div>
    )
};