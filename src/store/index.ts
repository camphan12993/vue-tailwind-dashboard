import { createStore } from 'vuex';
import { register, login } from '@/services/auth.service';
import router from '@/router';

export const enum actionTypes {
  'TOGGLE_SIDEBAR' = 'TOGGLE_SIDEBAR',
  'REGISTER' = 'REGISTER',
  'REGISTER_SUCCESS' = 'REGISTER_SUCCESS',
  'REGISTER_FAILURE' = 'REGISTER_FAILURE',
  'LOIGN' = 'LOIGN',
  'LOIGN_SUCCESS' = 'LOIGN_SUCCESS',
  'LOIGN_FAILURE' = 'LOIGN_FAILURE',
}
const user = JSON.parse(localStorage.getItem('user') ?? '{}');
export default createStore({
  state: {
    isSidebarOpen: true,
    status: { isLoggedIn: !!user, registering: false },
    user: user,
    err: '',
  },
  getters: {},
  mutations: {
    [actionTypes.TOGGLE_SIDEBAR](state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    [actionTypes.REGISTER_SUCCESS](state, user) {
      state.status.registering = true;
    },
    [actionTypes.LOIGN_SUCCESS](state, user) {
      state.status.isLoggedIn = true;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/');
    },
    [actionTypes.LOIGN_FAILURE](state, err) {
      state.err = err;
    },
  },
  actions: {
    [actionTypes.TOGGLE_SIDEBAR]({ commit }) {
      commit(actionTypes.TOGGLE_SIDEBAR);
    },
    [actionTypes.REGISTER]({ commit }, { email, password }) {
      register(email, password).then(
        (user) => {
          commit(actionTypes.REGISTER_SUCCESS, user);
        },
        (err) => {
          commit(actionTypes.REGISTER_FAILURE, err);
        }
      );
    },
    [actionTypes.LOIGN]({ commit }, { email, password }) {
      login(email, password).then(
        (user) => {
          commit(actionTypes.LOIGN_SUCCESS, user);
        },
        (err) => {
          commit(actionTypes.LOIGN_FAILURE, err);
        }
      );
    },
  },
  modules: {},
});
