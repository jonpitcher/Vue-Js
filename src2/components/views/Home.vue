<template>
    <div> 
        <h3> Anade un nuevo panel (home.vue) </h3>
        <div class="boards-collection">

        <span v-if="fetchingData"> cargando</span> <!-- this only shows if we are fetching data and then disappears because we don't need it ahhh...-->

     <input
        type="text"
        placeholder= "new board"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards" 
        :key="index"
        :name="board.name"
        :id="board.id">
      </board-card> <!-- there are two boards because of the v-for inside of the board-card.. --> 
        </div>
    </div>
</template>

<script>

import { mapState,mapActions} from 'vuex' //brings us the state that we want as a property in the component and use it in the vista

import BoardCard from '@/components/BoardCard'

export default {
    name: 'home-view',
    components: { BoardCard },
    data (){

        return{
            boardName: '',
            boardzzz: [
                {id: '1', name: 'Tareas'},
                {id: '2', name: "Lista de la Comp"} //this is hardcoded... we prefer this to be in backend...
            ]
        }
    },
    computed: {

      ...mapState([

        'boards', //we are taking it estado directly... can see this automatically
        'fetchingData',


      ])
    },

    methods: {
      ...mapActions([
        'fetchBoards',
        'addBoard'
      ]), //three dots means make a copy
        
        add(){
            this.addBoard[{name: this.boardName}] //now using method from other file...
            //this.boards.push({name: this.boardName })  BEFORE WE DID THIS
        }
    },

    created(){ //this method is called (llamado) before it is rendered in the DOM
      this.fetchBoards({user: 1}) //user is one we aren't do authentification
    }

    //metodos de ciclo de vida... we use the methods at some point so 
} 
</script>
.
<style scoped>
  h3 {
    text-align: left;
    margin: 1.5rem;
  }

  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    color: white;

    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}
</style>
