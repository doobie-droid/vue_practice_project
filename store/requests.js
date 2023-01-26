const requestModule = {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
  },
  getters: {
    requests(state, getters, rootState, rootGetters) {
      //only return requests that have the id of the signed in user
      const coachId = rootGetters.userId;
      return state.requests.filter((req) => req.coachId === coachId);
    },
    hasRequests(state,getters) {
      return getters.requests && getters.requests.length > 0;
    },
  },
  actions: {
    contactCoach(context, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        message: payload.message,
      };
      context.commit('addRequest', newRequest);
    },
  },
};

export default requestModule;
