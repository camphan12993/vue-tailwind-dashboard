import { createStore } from 'vuex';
import { register, login, logout } from '@/services/auth.service';
import router from '@/router';

export const enum actionTypes {
  'TOGGLE_SIDEBAR' = 'TOGGLE_SIDEBAR',
  'REGISTER' = 'REGISTER',
  'REGISTER_SUCCESS' = 'REGISTER_SUCCESS',
  'REGISTER_FAILURE' = 'REGISTER_FAILURE',
  'LOIGN' = 'LOIGN',
  'LOIGN_SUCCESS' = 'LOIGN_SUCCESS',
  'LOIGN_FAILURE' = 'LOIGN_FAILURE',
  'LOGOUT' = 'LOGOUT',
  'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS',
}

const getUser = () => {
  const userStorage = localStorage.getItem('user');
  return userStorage ? JSON.parse(userStorage) : null;
};
export default createStore({
  state: {
    isSidebarOpen: true,
    status: { isLoggedIn: !!getUser(), registering: false, isLoading: false },
    user: getUser(),
    err: '',
  },
  getters: {},
  mutations: {
    [actionTypes.TOGGLE_SIDEBAR](state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    [actionTypes.REGISTER_SUCCESS](state, user) {
      state.status.registering = true;
      state.status.isLoading = false;
      state.err = '';
      router.push({ name: 'login' });
    },
    [actionTypes.REGISTER](state) {
      state.status.isLoading = true;
    },
    [actionTypes.REGISTER_FAILURE](state, err) {
      state.err = err;
      state.status.isLoading = false;
    },
    [actionTypes.LOIGN](state) {
      state.status.isLoading = true;
    },
    [actionTypes.LOIGN_SUCCESS](state, user) {
      state.status.isLoggedIn = true;
      state.status.isLoading = false;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/');
    },
    [actionTypes.LOIGN_FAILURE](state, err) {
      state.err = err;
      state.status.isLoading = false;
    },
    [actionTypes.LOGOUT_SUCCESS](state) {
      localStorage.removeItem('user');
      state.status.isLoggedIn = false;
      state.user = null;
      state.err = '';
    },
  },
  actions: {
    [actionTypes.TOGGLE_SIDEBAR]({ commit }) {
      commit(actionTypes.TOGGLE_SIDEBAR);
    },
    [actionTypes.REGISTER]({ commit }, { email, password }) {
      commit(actionTypes.REGISTER);
      register(email, password).then(
        (user) => {
          commit(actionTypes.REGISTER_SUCCESS, user);
        },
        (err) => {
          commit(actionTypes.REGISTER_FAILURE, err.message);
        }
      );
    },
    [actionTypes.LOIGN]({ commit }, { email, password }) {
      commit(actionTypes.LOIGN);
      login(email, password).then(
        (user) => {
          commit(actionTypes.LOIGN_SUCCESS, user);
        },
        (err) => {
          commit(actionTypes.LOIGN_FAILURE, err.message);
        }
      );
    },
    [actionTypes.LOGOUT]({ commit }) {
      logout()
        .then(() => {
          commit(actionTypes.LOGOUT_SUCCESS);
          router.push({ name: 'login' });
        })
        .catch(() => {
          router.push({ name: 'login' });
          commit(actionTypes.LOGOUT_SUCCESS);
        });
    },
  },
  modules: {},
});
