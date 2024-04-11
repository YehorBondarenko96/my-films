import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import { useState, useEffect } from 'react';

export const Filter = () => {
    const filterWithState = useSelector(selectFilter);
    const dispatch = useDispatch();
    const [placeholderValue, setPlaceholderValue] = useState('');

    const updateStateForFilter = (evt) => {
        evt.preventDefault();
        const filterValue = evt.target.value;
        dispatch(setFilter(filterValue));
    };

    useEffect(() => {
        const realScreenWidth = window.innerWidth;

        if(realScreenWidth > 465){
            setPlaceholderValue('Please start typing the desired name')
        } else if(realScreenWidth <= 465 && realScreenWidth > 370){
            setPlaceholderValue('Please start typing name')
        } else {
            setPlaceholderValue('Type name')
        }
    }, []);

        return(
            <label className={[css.labelFilter, 'labelFilter'].join(' ')}>
                <input 
                value={filterWithState}
                className={css.inputFilter} 
                type="text" 
                name="filter" 
                placeholder={placeholderValue}
                onChange={updateStateForFilter}
                />
            </label>
        )
}