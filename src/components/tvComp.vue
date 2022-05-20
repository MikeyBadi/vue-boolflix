<template>
<div class="mb-fullcard">
  <cardCreation
  :card="card"/>
</div>
</template>

<script>
import cardCreation from './cardCreation.vue'
export default {
  name:'tvComp',
  components:{
    cardCreation
  },
  props:{
    card: Object
  }
}
</script>

<style lang="scss" scoped>
  .mb-fullcard{
    width: 400px;
    text-align: center;
    display: inline-block;
  }
</style>