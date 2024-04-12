import css from "../Styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ItemFilm } from "components/ItemFilm/ItemFilm";
import { ActiveItemFilm } from "components/ActiveItemFilm/ActiveItemFilm";
import { selectFilter, selectScrollLeftLists } from "../../redux/selectors";
import { useRef, useEffect, useState, Suspense } from "react";
import { setScrollLeftLists } from "../../redux/filmsSlice";
import { selectScreenOrient } from "../../redux/selectors";
import { Outlet } from "react-router-dom";


export const UlForCL = ({allFilms}) => {
    const dispatch = useDispatch();
    const [films, setFilms] = useState(allFilms);
    const filter = useSelector(selectFilter);
    const scrollLeftLists = useSelector(selectScrollLeftLists);
    const screenOrient = useSelector(selectScreenOrient);

    const [activeId, setActiveId] = useState(null);

    const listContHasELRef = useRef(false);
    const itemFilmRef = useRef([]);
    

    const indHasClickELRef = useRef([]);

    const listFilms = useRef(null);

    useEffect(() => {
        if(scrollLeftLists > 0){
            if(listFilms.current){
                setTimeout(() => {
                    listFilms.current.scrollLeft = scrollLeftLists;
                }, 100);
                dispatch(setScrollLeftLists(0));
            }
        }
    }, [scrollLeftLists, dispatch]);

    useEffect(() => {
        const listFilmsRef = listFilms.current;
        const indHasClickEL = indHasClickELRef.current;
        const itemsFilm = itemFilmRef.current;
        const coef = 3.2;
        let realScreenWidth = window.innerWidth;
        let screenWidth = realScreenWidth <= 1000 ? realScreenWidth : 1000;
        if (screenWidth && itemsFilm.length > 0) {
            itemsFilm.forEach(i => {
            i.style.height = screenWidth/coef + 'px';
            i.style.minWidth = screenWidth/(coef * 1.667) + 'px';
            i.style.fontSize = screenWidth/(coef * 19) + 'px'; 
            i.style.borderRadius = screenWidth/(coef * 22) + 'px';
            setActiveId(null);
        });
            if (listFilms.current) {
            listFilms.current.style.gap = screenWidth/(coef * 10) + 'px';
        }

        const forScroll = () => {
                if(itemsFilm.length > 0){
                    itemsFilm.forEach(item => readRectItem(item, realScreenWidth));
                };
        };

            if(!listContHasELRef.current && listFilmsRef && itemsFilm){
                listContHasELRef.current = true;
                listFilmsRef.addEventListener('scroll', forScroll);
            };

        const autoScroll = (item, conditionForAutoSc = 0) => {
            realScreenWidth = window.innerWidth;
            screenWidth = realScreenWidth <= 1000 ? realScreenWidth : 1000;
            if(screenWidth && itemsFilm.length > 0){
                const notActiveItems = itemsFilm.filter(i => i.getAttribute('id') !== item.getAttribute('id'));
                notActiveItems.forEach(i => {
                    i.style.height = screenWidth/coef + 'px';
                    i.style.minWidth = screenWidth/(coef * 1.667) + 'px';
                    i.style.fontSize = screenWidth/(coef * 19) + 'px'; 
                    i.style.borderRadius = screenWidth/(coef * 44) + 'px';
                    i.classList.remove(css.iFilmActive);
                });
                        item.style.height = screenWidth/coef * 1.4 + 'px';
                        item.style.minWidth = screenWidth/(coef * 1.667) * 1.4 + 'px';
                        item.style.fontSize = screenWidth/(coef * 19) * 1.4 + 'px'; 
                        item.style.borderRadius = screenWidth/(coef * 44) * 1.4 + 'px';
                        item.classList.add(css.iFilmActive);
                        setActiveId(item.getAttribute('id'));
                        const scrollLForList = listFilms.current.scrollLeft;
                        listFilms.current.style.scrollBehavior = 'smooth';
                        if(conditionForAutoSc !== 0){
                            listFilms.current.scrollLeft = scrollLForList + conditionForAutoSc;
                        };

                            setTimeout(() => {
                                if(listFilmsRef){
                                    listFilmsRef.addEventListener('scroll', forScroll);
                                };
                            }, 500);
            };
        };
        
        const forClickItem = (e, item, realScreenWidth) => {
            if (!e.target.classList.contains('buttonFav')) {
                if(listFilmsRef){
                listFilmsRef.removeEventListener('scroll', forScroll);
            };
            const rectItem = item.getBoundingClientRect();
            const rectListFilms = listFilms.current.getBoundingClientRect();
            let firShiftVar = 260;
            let secShiftVar = 60;
            if(realScreenWidth >= 1000){
                firShiftVar = 100;
                secShiftVar = 100;
            } else if(realScreenWidth < 1000 && realScreenWidth >= 900){
                firShiftVar = 95;
                secShiftVar = 95;
            } else if(realScreenWidth < 900 && realScreenWidth >= 800){
                firShiftVar = 85;
                secShiftVar = 85;
            } else if(realScreenWidth < 800 && realScreenWidth >= 750){
                firShiftVar = 77;
                secShiftVar = 77;
            } else if(realScreenWidth < 750 && realScreenWidth >= 700){
                firShiftVar = 73;
                secShiftVar = 73;
            } else if(realScreenWidth < 700 && realScreenWidth >= 650 ){
                firShiftVar = 67;
                secShiftVar = 67;
            } else if(realScreenWidth < 650 && realScreenWidth >= 600){
                firShiftVar = 62;
                secShiftVar = 62;
            } else if(realScreenWidth < 600 && realScreenWidth >= 550){
                firShiftVar = 58;
                secShiftVar = 58;
            } else if(realScreenWidth < 550 && realScreenWidth >= 500){
                firShiftVar = 51;
                secShiftVar = 51;
            } else if(realScreenWidth < 500 && realScreenWidth >= 450){
                firShiftVar = 58;
                secShiftVar = 58;
            } else if(realScreenWidth < 450 && realScreenWidth >= 400){
                firShiftVar = 51;
                secShiftVar = 51;
            } else if(realScreenWidth < 400 && realScreenWidth >= 350){
                firShiftVar = 46;
                secShiftVar = 46;
            } else if(realScreenWidth < 350){
                firShiftVar = 36;
                secShiftVar = 36;
            };
            if(rectItem.x < rectListFilms.x + rectListFilms.width/2) {
                const conditionForAutoSc = 0 - rectListFilms.width/2 + rectItem.x + firShiftVar;
                autoScroll(item, conditionForAutoSc);
            } else {
                const conditionForAutoSc = 0  - rectListFilms.width/2 + rectItem.x + secShiftVar;
                autoScroll(item, conditionForAutoSc);
            }
            }
        };

        itemsFilm.forEach(item => {
            const itemId = item.getAttribute('id');
            if (!indHasClickEL.includes(itemId) && listFilmsRef) {
                item.addEventListener('click', (e) => forClickItem(e, item, realScreenWidth));
                indHasClickEL.push(itemId);
            }
        });

        const readRectItem = (item, realScreenWidth) => {
            const rectItem = item.getBoundingClientRect();
            const rectListFilms = listFilms.current.getBoundingClientRect();
            let startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 50 - 170;
            let secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 50 - 170;
            let firstMove = 100;
            let secondMove = 100;
            if(realScreenWidth <= 1000 && realScreenWidth > 900){
                startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 50 - 100;
                secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 50 - 100;
                firstMove = 90;
            } else if(realScreenWidth <= 900 && realScreenWidth > 800){
                startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 50 - 100;
                secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 50 - 100;
                firstMove = 80;
            } else if(realScreenWidth <= 800 && realScreenWidth > 700){
                startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 50 - 100;
                secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 50 - 100;
                firstMove = 70;
            } else if(realScreenWidth <= 700 && realScreenWidth > 600){
                startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 50 - 80;
                secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 50 - 80;
                firstMove = 60;
            } else if(realScreenWidth <= 600 && realScreenWidth > 500){
                startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 20 - 50;
                secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 20 - 50;
                firstMove = 50;
            } else if(realScreenWidth <= 500 && realScreenWidth > 400){
                startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 20 - 50;
                secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 20 - 50;
                firstMove = 40;
            } else if(realScreenWidth <= 400){
                startActive = rectListFilms.x + rectListFilms.width/2 - rectItem.width/2 + 20 - 50;
                secondStAct = rectListFilms.x + rectListFilms.width/2 + rectItem.width/2 - 20 - 50;
                firstMove = 30;
            };
            if(rectItem.x > startActive && 
                rectItem.x < rectListFilms.x + rectListFilms.width/2 &&
                !item.classList.contains(css.itemContactActive)){
                    const conditionForAutoSc = 0 - rectItem.width/2 + firstMove;
                autoScroll(item, conditionForAutoSc);
            } else if(rectItem.x > rectListFilms.x + rectListFilms.width/2 && 
                rectItem.x < secondStAct &&
                !item.classList.contains(css.itemContactActive)){
                    const conditionForAutoSc = 0 + rectItem.width/2 - secondMove;
                    autoScroll(item, conditionForAutoSc);
                }
        };

        return () => {
            screenWidth = null;
            if(listFilmsRef){
                listContHasELRef.current = false;
                listFilmsRef.removeEventListener('scroll', forScroll);
            };

            if(itemsFilm.length > 0){
                itemsFilm.forEach(item => {
                    item.removeEventListener('click', () => forClickItem(item, realScreenWidth));
                });
            indHasClickELRef.current = [];
            };
        }
    }
    }, [films, screenOrient]);

    useEffect(() => {
        itemFilmRef.current = [];
        if(filter.length > 0) {
            setFilms(allFilms.filter((film) => film.title.toLowerCase().includes(filter.toLowerCase())));
        } else{
            setFilms(allFilms);
        };
    }, [filter, allFilms]);

    return(
        <>
            <ul ref={listFilms} className={css.listFilms}>
            {(films.length === 0 && filter.length === 0) ? (
                <h2>Right now you don't have any films.</h2>
            ) : (
            films.length !== 0 ? (
                films.map((film) => {
                    return(
                        <li ref={e => { 
                            if (e !== null && !itemFilmRef.current.some(i => i.getAttribute('id') === e.getAttribute('id'))) {
                                        itemFilmRef.current.push(e); 
                                    }
                            }}
                            key={film.id}
                            id={film.id}
                            className={[css.itemContact, 'itemContact'].join(' ')}>
                                {activeId === film.id ? 
                                <ActiveItemFilm
                        film={film}
                                />
                            : 
                                <ItemFilm 
                        film={film}
                        index={films.indexOf(film)}
                        id={film.id}
                        activeId={activeId}
                    />
                            }
                    </li>
                    )
                })
                    ) : (
                            <h2>Not found any films that meet the search criteria.</h2>
                    )
            )
            }
            </ul>
            <Suspense>
                <Outlet/>
            </Suspense>
        </>
    )
};