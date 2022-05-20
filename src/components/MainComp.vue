<template>
  <main>
    <tvComp
      v-for="(card,index) in cards"
      :key="`card-${index}`"
      :card="card"
      />
  </main>
</template>

<script>
import tvComp from './tvComp.vue'
export default {
  name:'MainComp',
  props:{
    cards:Array
  },
  components:{
    tvComp
  },
}
</script>

<style lang="scss" scoped>
  tvComp{
   width: 400px;
  }
</style>