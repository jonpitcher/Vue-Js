<template>
    <div> 
        <h3> Anade un nuevo panel (home.vue) </h3>
        <div class="boards-collection">

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

import BoardCard from '@/components/BoardCard'

export default {
    name: 'home-view',
    components: { BoardCard },
    data (){

        return{
            boardName: '',
            boards: [
                {id: '1', name: 'Tareas'},
                {id: '2', name: "Lista de la Comp"}
            ]
        }
    },
    methods: {
        add(){
            this.boards.push({name: this.boardName })
        }
    }
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
