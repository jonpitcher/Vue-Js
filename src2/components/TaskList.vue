<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"> 
      {{ task.title }} 
      <!-- task.title is where we see stuff without that nothing... v for nothing without {{}} -->
    </li> <!--:class is dynamic completed: means a condition (but what condition if it is true i dont get it-->
    <input
      type="text"
      placeholder="Add a new task..."
      v-model="title"
      @keyup.enter="add()"
    />
    <input
      type="text"
      placeholder="Add a new task..."
      v-model="title"
      @keyup.enter="add()"
    /> <!-- in the v-model title what is it taking exactly... what is the title turning into the input but there's a placeholder???? -->
  </ul>
</template>

<script>

export default {
  name: 'task-list',
  props: {
    listId: String,
    tasks: Array
  },

  data () {
    return {
      title: ''
    }
  },

  methods: {
    add () {
     //to do
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    background-color: #fafafa;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;

    &.completed {
      background-color: #cfd8dc;
      color: #90a4ae;
    }
  }

  input {
    box-sizing: border-box;
    background-color: #eceff1;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    margin: 0.5rem;
    outline: 0;
    padding: 0.75rem 0;
    transition: background-color 600ms ease;
    width: 100%;

    &:focus,
    &:active {
      background-color: #fafafa;
      border-bottom: 1px solid #ccc;
      margin: 0.25rem 0;
      padding: 1rem;
    }

    &::placeholder {
      color: #90a4ae;
    }
  }
</style>
