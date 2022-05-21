<template>
  <main>
    <div class="d-flex flex-wrap mb-fullCont">
    <!-- dare al contenitore di tvcomp le instruzioni per il wrapping -->
      <filmComp
        v-for="(card,index) in cards"
        :key="`card-${index}`"
        :card="card"
      />

      <openMainComp
        v-for="(card,index) in cards"
        :key="`card-${index}`"
        :card="card"
      />
    </div>
  </main>
</template>

<script>
import filmComp from './filmComp.vue'
import openMainComp from './openMainComp.vue'
export default {
  name:'MainComp',
  props:{
    cards:Array
  },
  components:{
    filmComp,
    openMainComp
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