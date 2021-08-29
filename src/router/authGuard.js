//import store from '../store'

export const authGuard = (to, from, next) => {

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('last-page', to.path);

        let token = localStorage.getItem('apollo-token');
        if (token) return next();
    }
    return next({ path: '/login' })
}
