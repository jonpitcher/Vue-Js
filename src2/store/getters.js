export default {
    getListsByBoard: (state) => (boardId) => { //curring llamar a funciones de forma anidada...?
      return Object.values(state.lists)
        .filter(list => list.board === boardId)
    },
  
    getTasksFromList: (state) => (listId) => { //llama a la funcion listId
      return Object.values(state.tasks)
        .filter(task => task.list === listId)//in filter after => is the condition only task.list where === listid
    }
  }
  