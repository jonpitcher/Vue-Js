<template>
  <section>
    <header>
      <h3> THIS IS MY COLUMN!!! {{ name }}</h3>
    </header>
  <task-list

  :listId="listId"
  :tasks="tasksList"> <!--he said this is going to go as a property from column to the tasklists component -->
  </task-list>  <!-- he said listId will help for firebase later -->

  </section>
</template>

<script> 

import TaskList from './TaskList'

export default {
  name: 'column',
  components: { TaskList }, //here he said we are definition it...
  props: {
    listId: String,
    name: String
  },

  data () {

    return{
      tasksList: [
      {id: 1, title: 'Aprender vue', completed: false},
      {id: 2, title: 'Aprender vuex', completed: false}
      ]
    }
  }
}

</script>

<style>

<style scoped>
  section {
    
  }

  header {
    color: white; 
    background-color: #455A64;
    margin: 0;
    padding-bottom: 1rem;
    padding-top: 20px;
  }

  h3 {
    margin: 0;
  }
</style>

