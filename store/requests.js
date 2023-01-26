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
    setRequests(state, payload) {
      state.requests = payload;
    }
  },
  getters: {
    requests(state, getters, rootState, rootGetters) {
      //only return requests that have the id of the signed in user
      const coachId = rootGetters.userId;
      return state.requests.filter((req) => req.coachId === coachId);
    },
    hasRequests(state, getters) {
      return getters.requests && getters.requests.length > 0;
    },
  },
  actions: {
    async contactCoach(context, payload) {
      const newRequest = {
        
        userEmail: payload.email,
        message: payload.message,
      };
      const response = await fetch(
        `https://vue-practice-project-34b4f-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest),
        }
      );
      const responseData = await response.json();
      //firebase returns the ID of that record on the '.name' property
      newRequest.id = responseData.name;
      newRequest.coachId = payload.coachId

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to send request'
        );
        throw error;
      }
      context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
      const coachId = context.rootGetters.userId
      const response = await fetch(
        `https://vue-practice-project-34b4f-default-rtdb.firebaseio.com/requests/${coachId}.json`
      );
      const responseData = await response.json()
      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to fetsh request'
        );
        throw error;
      }

      const requests = []
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: responseData[key].userEmail,
          message:responseData[key].message
        }
        requests.push(request)
      }
      context.commit('setRequests',requests)

    }
  },
};

export default requestModule;
