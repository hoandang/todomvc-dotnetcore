<template>
<div class="tasks">
  <h1>Todo</h1>
  <ul>
    <li v-for="task in tasks">{{task.name}}</li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  }
}
</script>
