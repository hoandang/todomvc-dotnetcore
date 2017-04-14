<template>
<footer class="task-footer">
  <span class="task-footer__count">{{remainingTasks}} {{ remainingTasks | pluralize('item') }} left</span>
  <ul class="task-footer__filter">
    <li> <a href="#">All</a> </li>
    <li> <a href="#">Active</a> </li>
    <li> <a href="#">Completed</a> </li>
  </ul>
  <button class="task-footer__clear-completed">Clear completed</button>
</footer>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    remainingTasks() {
      return this.tasks.filter(task => !task.isComplete).length;
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

<style scoped>
.task-footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.task-footer:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.task-footer__count {
  float: left;
  text-align: left;
}

.task-footer__filter {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

.task-footer__filter li {
  display: inline;
}

.task-footer__filter li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.task-footer__filter li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

.task-footer__filter li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.task-footer__clear-completed {
  display: none;
  float: right;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
}
.task-footer__clear-completed:hover {
  text-decoration: underline;
}
</style>