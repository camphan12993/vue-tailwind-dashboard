import { createStore } from 'vuex';

export const enum actionTypes {
  'TOGGLE_SIDEBAR' = 'TOGGLE_SIDEBAR',
}

export default createStore({
  state: {
    isSidebarOpen: true,
  },
  getters: {},
  mutations: {
    [actionTypes.TOGGLE_SIDEBAR](state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  actions: {
    [actionTypes.TOGGLE_SIDEBAR]({ commit }) {
      commit(actionTypes.TOGGLE_SIDEBAR);
    },
  },
  modules: {},
});
