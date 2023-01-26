import { createStore } from 'vuex';
import coachModule from './coach';
const store = createStore({
  modules: {
    coachModule: coachModule,
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
      }
  },
  actions: {},
});

export default store;
