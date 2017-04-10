import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';
import store from './Store';
import Tasks from './components/Tasks.vue';
import TaskForm from './components/TaskForm.vue';

window._ = _;
window.axios = axios;

new Vue({

  store,

  el: '#todo',

  components: {
    Tasks, TaskForm
  }
});
