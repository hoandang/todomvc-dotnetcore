import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash';
import store from './Store';
import Tasks from './components/Tasks.vue';
import TaskForm from './components/TaskForm.vue';
import TaskFooter from './components/TaskFooter.vue';

window.axios = axios;
window._ = _;

new Vue({

  store,

  el: '#todo',

  components: {
    Tasks, TaskForm, TaskFooter
  }
});
