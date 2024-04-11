export const selectError = (state) => state.auth.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsEmail = state => state.auth.user.email;

export const selectUsId = state => state.auth.user.id;

export const selectToken = state => state.auth.token;