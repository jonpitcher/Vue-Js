
import Vue from 'vue'
import * as types from './mutation-types'

export default {
  // Fetch the boards created by user
  [types.FETCH_BOARDS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
    state.fetchingData = false
    state.error = null
    state.boards = { ...boards }
  },

  [types.FETCH_BOARDS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // Fetch the lists from a board
  [types.FETCH_LISTS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_LISTS_SUCCESS] (state, { lists }) {
    state.fetchingData = false
    state.error = null
    state.lists = { ...lists }
  },

  [types.FETCH_LISTS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // Fetch the tasks from a list
  [types.FETCH_TASKS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
    state.fetchingData = false
    state.error = null
    state.tasks = { ...tasks }
  },

  [types.FETCH_TASKS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // Create a new board
  [types.ADD_BOARD] (state, { board }) { //something about the id being inside and outside so we dont have to 
    Vue.set(state.boards, board.id, board)
  },

  // Create a new task list
  [types.ADD_COLUMN] (state, { column }) {
    Vue.set(state.lists, column.id, column)
  },

  // Add a new task to a task list
  [types.ADD_TASK] (state, { task }) {
    Vue.set(state.tasks, task.id, task)
  },

  // Delete a task from a task list
  [types.DELETE_TASK] (state, { taskId }) { //this is the payload???? only taskId not the state
    state.tasks = Object.values(state.tasks) //object.values gives us the properties...?
      .filter(task => task.id !== taskId) //copy of the state but without the one with the id in the parameter above so basically reproducing everything without the one we already had...?? seems slow
  }, //.filter lo contacena -- => que solo devuelva los que sean diferentes a task id

  // Check a task as completed
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed
  }
}

//ALL OF THESE MUTACIONES ARE TEMPORARY LOCAL BUT THEN WHEN WE USE THE ACTIONS THEY ARE PERMANENT IN FIREBASE WHEN WE RELOAD THE PAGE...??


/*

import * as types from './mutations-types' //everything from long file mutations-types in one object types

export default{

    //fetch de los paneles creados por el usuario

    [types.FETCH_BOARDS_REQUESTS] (state){ //this is a muations object
        state.fetchingData = true
        state.error = null
    },

    [types.FETCH_BOARDS_SUCCESS](state, {boards}){

        state.fetchingData= false 
        state.error = null 
        state.boards = { ...boards} //3 puntos means like concat from arrays but for objects.. like a push take from boards

    },

    [types.FETCH_BOARDS_FAILURE] (state, {error}){
        state.fetchingData = false //this ends the peticion}
        state.error = error
    }
}

*/