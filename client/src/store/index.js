import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: "John Doe",
    age: "28"
  },
  getters: {
    NAME: state => {
      return state.name;
    }
  },
  mutations: {},
  actions: {},
})

