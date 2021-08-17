import * as types from './mutation-types'
import API from '@/api' //aqui da igual si utilizamos un api de firebase de graphql de lo que sea...


export default { //export is like return then???
  // Fetch via AJAX the boards from user

  //acciones reciben dos parametros uno el estado y el otro el payload (store=estado, payload= datos desde el componente)

  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST) //despachar la accion a las mutaciones...??
    //we are iniciando la peticion... goes to the store to the mutaciones.. tells it there what change to make in the state

//despachar= send /deal with 
    API.getBoardsByUser(user) //brings the action from the component
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() })) //here we are defining boards: as a snap.val() which is the value we send to the mutations...
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error })) //commit is the only way to actually change a mutation
  },

  // Fetch via AJAX the lists from a board
  fetchLists ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)

    API.getListsFromBoard(board) //board parameter sends the component 
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  // Fetch via AJAX the tasks from a list
  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)

    API.getTasksFromList(list)
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error })) //catch would be for the error
  }, //now after this combines sinchronous with ansynchronous... sinchronous for immediate for feedback... but then asinchrona for the mutacion

  // Add a new board via AJAX
  addBoard ({ commit }, { name }) {
    API.postBoard(name)
      .then(board => commit(types.ADD_BOARD, { board }))
  },

  // Add a new column/list to a board via AJAX
  addColumn ({ commit }, { board, name }) {
    API.postList(board, name)
      .then((column) => commit(types.ADD_COLUMN, { column }))
  },

  // Add a new tasks to a list/column via AJAX
  addTask ({ commit }, { list, title }) {
    API.postTask(list, title)
      .then((task) => commit(types.ADD_TASK, { task }))
  },

  // Delete a task from a list/AJAX via AJAX
  deleteTask ({ commit }, { taskId }) {
    API.deleteTask(taskId)
      .then(() => commit(types.DELETE_TASK, { taskId }))
  }, //then is for when the promise ends then...

  // Mark as completed a task via AJAX
  markAsCompleted ({ commit }, { task }) {
    API.completedTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED, { task }))
  }
}
// if it is asynchronous then u use the API...

//GETTERS LET US GET A SMALL PART OF THE STATE FROM THE COMPONENTS WITHOUT HAVING TO GET EVERYTHING FROM THE MUTATIONS AND THE ACTIONS... TO SLOWER