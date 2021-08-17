<template>
  <section>
    <h3><span>My Boards (board.vue)</span> ▸ {{ name }}</h3>
    <input
      type="text"
      placeholder="Anade una lista (board.vue)"
      v-model="listName"
      @keyup.enter="add()"
    />

        <div class="container">
      <column
        v-for="(list, index) in boardList"
        :key="index"
        :listId="list.id"
        :name="list.name">
      </column>

      </div> 

  </section>
</template>

<script>

import {mapState, mapActions, mapGetters} from 'vuex'
import Column from '@/components/Column' //not sure small or large column here small killed whole thing


export default {
  name: 'board-view',
  components: { Column },

  props: {
    name: String,
    id: String
  },

  data(){

    return {
      listName: '', //so list name we are just defining ourselves then when we type?
      boardList: [
        {id: '1', name: '----Todo -----THIS IS A COLUMN..??? but in Board.vue'},
        {id: '2', name: '----doing-=----THIS IS A COLUMN..???'}
      ]
    }
  },

    computed: {

      ...mapState([

        'fetchingData'
      ]),

        ...mapGetters([

        'getListsByBoard'
      ]),

      boardsList(){

        return this.getListsByBoard(this.id)
      }

    },

  methods:{

/*
    ...mapActions([
      'fetchLists'
      'addColumn'
      ]),

      */

    add() {

      this.boardList.push({name: this.listName}) //adding to name this.list name so is the id going up every time we create a new one and the only thing we are making is the name but where does the name come from...?
      
    }
  }

}

 
</script>

<style scoped>
  h3 {
    color: #37474f;
    text-align: left;
    margin: 1.5rem;
  }

  section {
    text-align: left;
  }

   input {
    background-color: #607d8b;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    color: white;
    font-size: 1.2rem;
    margin: 0 1rem;
    outline: 0;
    padding: 1rem;
    transition: all 600ms ease;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}


</style>
