<template>
  <div class="mb-fullcard">
    <cardCreationOpen
    :cardOpen="cardOpen"/>
  </div>
</template>

<script>
import cardCreationOpen from './cardCreationOpen.vue'
export default {
  name:'openMainComp',
  components:{
    cardCreationOpen
  },
  props:{
    cardOpen: Object
  }
}
</script>

<style lang="scss" scoped>
  .mb-fullcard{
    color: white;
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