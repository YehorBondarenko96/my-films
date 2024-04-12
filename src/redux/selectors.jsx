// import { createSelector } from "@reduxjs/toolkit";

export const selectFilms = state => state.films.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.films.isLoading;

export const selectSecError = state => state.films.error;

export const selectBackgroundImages = state => state.backgroundImages.images;

// const blackListImages = [926728, 2325627, 2004483, 1911637, 1365995, 2750627, 11080, 5422901];

// export const selectBgGeneral = createSelector(
//     [selectBackgroundImages],
//     (backgroundImages) => {
//         if (backgroundImages.length > 0){
//             const bgGeneral = backgroundImages[0];
//         blackListImages.push(bgGeneral.id);
//         return bgGeneral
//     }
//     }
// );

// export const selectReservedBG = createSelector(
//     [selectBackgroundImages],
//     (backgroundImages) => {
//         if (backgroundImages.length > 1){
//             const reservedBG = backgroundImages[1];
//             blackListImages.push(reservedBG.id);
//             return reservedBG
//         } 
//     }
// );

export const selectScrollLeftLists = state => state.films.scrollLeftLists;

export const selectScreenOrient = state => state.films.screenOrientation;

export const selectEmail = state => state.films.email;