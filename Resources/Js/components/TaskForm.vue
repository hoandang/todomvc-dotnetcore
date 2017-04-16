<template>
<form id="task-form" v-on:submit.prevent="addNewTask()">
  <input class="task-form__toggle-all" type="checkbox" v-model="allDone" v-show="hasTasks">
  <input class="task-form__new-task" type="text" 
    autofocus="autofocus"
    autocomplete="off"
    placeholder="What needs to be done?" v-model="taskName" required>
</form>
</template>

<script>
export default {
  data() {
    return {
      taskName: ''
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    hasTasks() {
      return this.tasks.length > 0;
    },
    allDone: {
      get() {
        return _.filter(this.tasks, ['isCompleted', false]).length == 0;
      },
      set(value) {
        this.$store.commit('toggleAllTasks', {value});

        this.tasks.forEach(task => {
          axios.put(`api/todo/${task.id}`, task);
        })
      }
    }
  },
  methods: {
    addNewTask() {
      const data = {
        name: this.taskName,
        isCompleted: false
      };

      axios.post('/api/todo', data).then(response => {
        data.id = response.data.id;
        this.$store.commit('addTask', {data});
        this.taskName = '';
      });
    }
  } 
}
</script>

<style scoped>
.task-form__new-task {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  outline: none;
  box-sizing: border-box;
  font-smoothing: antialiased;
}
.task-form__toggle-all {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-appearance: none;
  appearance: none;
  background: none;
  width: 60px;
  height: 34px;
  text-align: center;
  border: none;
  top: 15px;
  left: -5px;
  position: absolute;
  cursor: pointer;
  z-index: 1;
}
.task-form__toggle-all:before {
  content: "❯";
  font-size: 22px;
  color: rgb(230, 230, 230);
  padding: 10px 27px;
}

.task-form__toggle-all:checked:before {
  color: #737373;
}
</style>
