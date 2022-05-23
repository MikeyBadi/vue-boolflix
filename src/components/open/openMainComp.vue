<template>
  <div>
    <cardCreation
    :card="card"/>
  </div>
</template>

<script>
import cardCreation from '../cardCreation.vue'
export default {
  name:'openMainComp',
  comments:{
    cardCreation
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