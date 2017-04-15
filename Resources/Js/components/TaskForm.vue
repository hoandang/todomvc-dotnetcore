<template>
<form id="task-form" v-on:submit.prevent="addNewTask()">
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
  methods: {
    addNewTask() {

      const data = {
        name: this.taskName,
        isComplete: false
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
</style>
