import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash';
import store from './Store';
import router from './Routes';
import {pluralise, capitalise} from './Filters';
import Tasks from './components/Tasks.vue';
import TaskForm from './components/TaskForm.vue';
import TaskFooter from './components/TaskFooter.vue';

window.axios = axios;
window._ = _;

Vue.filter('pluralise', pluralise);
Vue.filter('capitalise', capitalise);

const App = new Vue({

  store,

  el: '#todo',

  components: {
    Tasks, TaskForm, TaskFooter
  }

});

router.start(App);
