export const selectError = (state) => state.auth.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsEmail = state => state.auth.user.email;

export const selectUsId = state => state.auth.user.id;

export const selectUsName = state => state.auth.user.name;

export const selectPlayed = state => state.auth.user.played;

export const selectSelected = state => state.auth.user.selected;

export const selectFavorite = state => state.auth.user.favorite;

export const selectToken = state => state.auth.token;

export const selectRegistEnded = state => state.auth.registEnded;