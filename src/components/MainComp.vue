<template>
  <main>
    <div class="d-flex flex-wrap mb-fullCont">
    <!-- dare al contenitore di tvcomp le instruzioni per il wrapping -->
      <tvComp
        v-for="(card,index) in cards"
        :key="`card-${index}`"
        :card="card"
      />
    </div>
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
@import '../assets/style/utils';
main{
  width: 100%;
  background-color: $primary-bg;

  .mb-fullCont{
    padding: 30px;
    margin: 0px 60px;
    padding-top: 100px;
  }
}
</style>