<template>
<div class="mb-fullcard">
  <cardCreationFilm
  :card="card"/>
</div>
</template>

<script>
import cardCreationFilm from './cardCreationFilm.vue'
export default {
  name:'tvComp',
  components:{
    cardCreationFilm
  },
  props:{
    card: Object
  }
}
</script>

<style lang="scss" scoped>
  .mb-fullcard{
    flex-basis: 210px;
    max-width: 170px;
    min-width: 170px;
    height: 210px;
    // overflow: hidden;
    // text-align: center;
    // display: inline-block;
    margin: 0 5px 30px;
  }
</style>