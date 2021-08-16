<template>
  <router-link 
    class="board-card"
    :to="{ name: 'board', params: { name, id } }"> <!-- id here is taking us to a new page when we create a new board card then... --> 

      <span class="board-card-title">❏ {{ name }}</span> <!--why are we englobing it here... -->
  </router-link>  <!-- this whole thing above is actually a router link... taking us to the name of the board by the id.... should print out the name and id to get a feeling of what is doing what...-->
</template>
<!-- board itself is a router we are going to put into another file... -->
      
  <!-- here you can put a router but in this case we are going to use an object and tell what parameters we want to pass to it...-->

<!-- enlazado means quotes...? --> 
<script>
export default {
  name: 'board-card',
  props: {
    id: String,
    name: String
  }
}
</script>

<style scoped>
  .board-card {
    background-color: #546E7A;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    box-sizing: border-box;
    border-radius: 5px;
    color: #fafafa;
    margin: 0.5rem 1.5rem;
    padding: 1rem;
    text-align: left;
    text-decoration: none;
    transition: all 600ms ease;
    width: 100%;
    height: 100px;

    @media screen and (min-width: 600px) {
      width: 33%;
    }
    @media screen and (min-width: 1024px) {
      width: 250px;
    }
  }
</style>

