import Cookies from 'js-cookie';
// App
const sidebarStatusKey = 'sidebar_status';
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus) => Cookies.set(sidebarStatusKey, sidebarStatus);
// User
const tokenKey = 'token';
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token) => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);
//# sourceMappingURL=cookies.js.map