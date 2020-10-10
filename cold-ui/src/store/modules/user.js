import * as tslib_1 from "tslib";
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import { login, logout, getUserInfo } from '@/api/users';
import { getToken, setToken, removeToken } from '@/utils/cookies';
import store from '@/store';
let User = class User extends VuexModule {
    constructor() {
        super(...arguments);
        this.token = getToken() || '';
        this.username = '';
        this.phone = '';
        this.fullname = '';
        this.company = '';
        this.avatar = '';
        this.logintime = '';
    }
    SET_TOKEN(token) {
        this.token = token;
    }
    SET_NAME(username) {
        this.username = username;
    }
    SET_AVATAR(avatar) {
        this.avatar = avatar;
    }
    SET_COMPANY(company) {
        this.company = company;
    }
    SET_LOGINTIME(logintime) {
        this.logintime = logintime;
    }
    async Login(userInfo) {
        let { username, password } = userInfo;
        username = username.trim();
        const { data } = await login({ username, password });
        setToken(data.token);
        this.SET_TOKEN(data.token);
    }
    ResetToken() {
        removeToken();
        this.SET_TOKEN('');
    }
    async GetUserInfo() {
        if (this.token === '') {
            throw Error('GetUserInfo: token is undefined!');
        }
        const { data } = await getUserInfo({});
        if (!data) {
            throw Error('Verification failed, please Login again.');
        }
        const { username, company, phone, fullname, avatar, logintime } = data;
        this.SET_COMPANY(company);
        this.SET_NAME(username);
        this.SET_AVATAR(avatar);
        this.SET_LOGINTIME(logintime);
    }
    async LogOut() {
        if (this.token === '') {
            throw Error('LogOut: token is undefined!');
        }
        await logout();
        removeToken();
        this.SET_TOKEN('');
        this.SET_NAME('');
    }
};
tslib_1.__decorate([
    Mutation
], User.prototype, "SET_TOKEN", null);
tslib_1.__decorate([
    Mutation
], User.prototype, "SET_NAME", null);
tslib_1.__decorate([
    Mutation
], User.prototype, "SET_AVATAR", null);
tslib_1.__decorate([
    Mutation
], User.prototype, "SET_COMPANY", null);
tslib_1.__decorate([
    Mutation
], User.prototype, "SET_LOGINTIME", null);
tslib_1.__decorate([
    Action
], User.prototype, "Login", null);
tslib_1.__decorate([
    Action
], User.prototype, "ResetToken", null);
tslib_1.__decorate([
    Action
], User.prototype, "GetUserInfo", null);
tslib_1.__decorate([
    Action
], User.prototype, "LogOut", null);
User = tslib_1.__decorate([
    Module({ dynamic: true, store, name: 'user' })
], User);
export const UserModule = getModule(User);
//# sourceMappingURL=user.js.map