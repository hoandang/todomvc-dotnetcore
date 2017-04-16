<template>
<div class="tasks">
  <ul>
    <li class="task" v-for="task in filteredTasks">
      <input class="task__toggle" type="checkbox" :checked="task.isCompleted" @change="toggle(task)">
      <span class="task__name" :class="{'task--completed': task.isCompleted}">{{task.name}}</span>
      <button class="task__destroy" @click="remove(task)"></button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    filteredTasks() {
      return this.filters()[this.$store.state.route];
    }
  },

  methods: {
    remove(task) {
      axios.delete(`/api/todo/${task.id}`);
      this.$store.commit('removeTask', {task});
    },
    toggle(task) {
      axios.put(`api/todo/${task.id}`, task);
      this.$store.commit('toggleTask', {task});
    },
    filters() {
      return {
        all: this.tasks,
        completed: this.tasks.filter(task => task.isCompleted),
        active: this.tasks.filter(task => !task.isCompleted)
      };
    }
  }
}
</script>

<style scoped>
.tasks {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}
.tasks ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.task {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.task:hover .task__destroy {
  display: block;
}

.task__toggle {
  height: 40px;
  background: none;
  text-align: center;
  width: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.task__toggle:checked:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}

.task__toggle:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}

.task__name {
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

.task--completed {
  text-decoration: line-through;
  color: #d9d9d9;
}

.task__destroy {
  display: none;
  background: none;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
}

.task__destroy:hover {
  color: #af5b5e;
  cursor: pointer;
}

.task__destroy:after {
  content: '×';
}
</style>

