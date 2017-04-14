import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  tasks: __SHARE__.TASKS
};

const mutations = {
  addTask(state, {data}) {
    state.tasks.push(data);
  },
  removeTask(state, {task}) {
    state.tasks = _.reject(state.tasks, task);
  },
  toggleTask(state, {task}) {
    task.isComplete = !task.isComplete;
  },
  updateTaskId(state, {oldTaskId, newTaskId}) {
    const foundTask = getTask(oldTaskId);
    foundTask.id = newTaskId;
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
