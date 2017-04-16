import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  tasks: __SHARE__.TASKS,
  route: 'all'
};

const mutations = {
  addTask(state, {data}) {
    state.tasks.push(data);
  },
  removeTask(state, {task}) {
    state.tasks = _.reject(state.tasks, task);
  },
  toggleTask(state, {task}) {
    task.isCompleted = !task.isCompleted;
  },
  setRoute(state, {route}) {
    state.route = route;
  },
  removeCompletedTasks(state) {
    state.tasks = state.tasks.filter(task => !task.isCompleted);
  },
  toggleAllTasks(state, {value}) {
    state.tasks.forEach(task => task.isCompleted = value);
  }
};

function getTask(taskId)
{
  return state.tasks.find(task => task.id == taskId);
}

export default new Vuex.Store({
  state,
  mutations
});
