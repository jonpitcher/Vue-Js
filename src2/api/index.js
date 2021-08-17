
import { db } from './firebase'

const boardsRef = db.ref('/boards') //ref= references?
const listRef = db.ref('/lists') //it's getting a ref from lists but what is it referring to... database...
const tasksRef = d.boardsRef.ref('/tasks')

//un objeto con varias funciones peticiones a la base de datos (requests??)

export default{ 
    
    getBoardsByUser(userId = 1){ //if we add users remember authentification means that you have a username and password

        const query = boardsRef.orderByChild('owner').equalTo(userId)
        return query.once('value')
    },
        
        //this is an object...

    postBoard (name, owner = 1 ) { //crear un nuevo panel
        const id = boardsRef.push().key //this is the hijo //creates a key when we do a push in firebase
        const board = {id, name, owner} //so this containers all 3 the two parameters and the id item we just made in an object....?

        return boardsRef.child(id).set(board) //set==anadir  //subir a firebase
        .then(() => board)
        //devolver una promesa
    },
    getListsFromBoard(boardId){

        const query = listsRef.orderByChild('board').equalTo(boardId)
        return query.once() //lists for the list in the one above orderbychild('board')... but only once
    }, //devuelve la lista de tareas con ese panel
    postList (board, name) {

        const id = listsRef.push().key //new id from fireplace
        const column = {id, name, board} //board he said === panel????

        return listsRef.child(id) //devolver una promesa c/ queremos que anada un objeto dentro del objeto que tiene el id que hemos creado
        .then(() => column) //devuelve la columna ---devolver == return???


    }, //anadir una nueva lista a un panel
    getTasksFromList(listId){

        const query = tasksRef.orderByChild('list').equalsTo(listId)  //devuelve aqui lo que es igual a list id...

        return query.once('value')
       
    }, //nos devuelve las tareas en una determinada lista
    postTask(list,title) {

        const id = tasksRef.push().key
        const task = { id, list, title, completed: false} //ah so completed is if the task is done or not...
        
        return tasksRef.child(id).set(task) //this part uploads it to firebase
        .then(()=> task)//cuando sucede devuelve la tarea... so its waiting for it to load then...?? why return the task

    },
    deleteTask(taskId){ //take the task id and then deletes it from database

        return tasksRef.child(taskId).remove()
    },
    completedTask(taskId){

    const query = tasksRef.child(taskId).child('completed')
    return query.once('value')
        .then(snap => snap.value()) //A DataSnapshot is an efficiently generated, immutable copy of the data at a Database location. It cannot be modified and will never change 
        .then(data => query.set(!data)) //gives us the opposite if its completed then put incompleted if not put occompleted
    },
}


//firestore is just the database of firebase
//A promise represents an operation and the future value it may return 
//promise is a task that hasn't finished yet 

//board is actually the page you see..
//there are cards inside of it
//trello is to use 
//ah so task is like in an agenda
//board card is just a piece inside of a board then...?
//what is a column exactly... (oh are they supposed to be left right later when we finish but now up and down..)


//card is the smallest piece board is everything -- list is all the cards in a column but what is a column..??


//vamos a cachear referencias a collecciones

//mas lectura que escritura en firebase.. no hay que utilizar tablas igual

//3 collecciones how the data base is organized... different than sql...

//he said this is our client? I dont get it...
//i should read about firebase a little maybe or just about api in general...


//mutations are lik strings that indicate what kind of action we need to change the estado...?