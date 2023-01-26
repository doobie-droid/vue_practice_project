import { createStore } from 'vuex';
import coachModule from './coach';
import requestModule from './requests';
const store = createStore({
  modules: {
    coachModule: coachModule,
    requestModule: requestModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  mutations: {},
  getters: {
    userId(state) {
      return state.userId;
    },
  },
  actions: {},
});

export default store;
