<template>
<div class="field">
  <form v-on:submit.prevent="addNewTask()">
    <div class="field has-addons">
      <p class="control">
        <input class="input" type="text" placeholder="Task name" v-model="taskName" required>
      </p>
      <p class="control">
        <button class="button is-primary" type="submit">Add new task</button>
      </p>
    </div>
  </form>
</div>
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

      this.$store.commit('addTask', {data});
      this.taskName = '';

      axios.post('/api/todo', data);
    }
  } 
}
</script>