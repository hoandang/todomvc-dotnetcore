import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  tasks: __SHARE__.TASKS
};

const mutations = {
  addTask(state, {data}) {
    state.tasks.push(data);
  }
};

export default new Vuex.Store({
  state,
  mutations
});
