<template>
  <main>
    <div class="d-flex flex-wrap mb-fullCont">
    <!-- dare al contenitore di tvcomp le instruzioni per il wrapping -->
      <filmComp
        v-for="(card,index) in cards"
        :key="`card-${index}`"
        :card="card"
      />
      <tvComp
        v-for="(cardTv,index) in cardsTv"
        :key="`cardTv-${index}`"
        :cardTv="cardTv"
      />

      <!-- <openMainComp
        v-for="(card,index) in cards"
        :key="`card-${index}`"
        :card="card"
      /> -->
    </div>
  </main>
</template>

<script>
import filmComp from './film/filmComp.vue'
import tvComp from './series/tvComp.vue'
// import openMainComp from './openMainComp.vue'
export default {
  name:'MainComp',
  props:{
    cards:Array,
    cardsTv:Array
  },
  components:{
    filmComp,
    tvComp,
    // openMainComp
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