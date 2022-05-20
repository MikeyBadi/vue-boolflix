<template>
  <div class="mb-boolflix">
    <HeaderComp/>
    <MainComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  },
  data() {
    return {
      urlAPI:'https://api.themoviedb.org/3/search/movie',
      apiComp:{
        api_key:'9d9c00a5c5227c48a18b2cb3044f13c9',
        language:'it-IT',
        query: 'avengers'
      }
    }
  },
  methods: {
    getAPI(){
      axios.get(this.urlAPI,{
        params:this.apiComp
      })
      .then(re=>{
        console.log(re.data.results);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  },
  mounted(){
    this.getAPI()
  },
}
</script>

<style lang="scss">
  @import './assets/style/general';

  .mb-boolflix{
    height: 100vh;
    background-color: darkslategrey;
  }

</style>
