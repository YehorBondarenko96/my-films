export const selectFilms = state => state.films.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.films.isLoading;

export const selectSecError = state => state.films.error;

export const selectBackgroundImages = state => state.backgroundImages.images;

export const selectScrollLeftLists = state => state.films.scrollLeftLists;

export const selectScreenOrient = state => state.films.screenOrientation;

export const selectEmail = state => state.films.email;
