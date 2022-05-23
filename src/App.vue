<template>
  <div class="mb-boolflix">
    <HeaderComp
    @showFunction="showFunction"
    />
    <MainComp :cards="showArr"/>
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
      showInput:'',
      urlAPI:'https://api.themoviedb.org/3/search/movie',
      apiComp:{
        api_key:'9d9c00a5c5227c48a18b2cb3044f13c9',
        language:'it-IT',
        query: ''
      },
      showArr:[],
    }
  },
  methods: {
    getAPI(){
      this.apiComp.query = this.showInput
      console.log('xxxxxxxx',this.apiComp.query);
      axios.get(this.urlAPI,{
        params:this.apiComp
      })
      .then(re=>{
        console.log(re.data.results);
        this.showArr = re.data.results
        console.log('Array dei film',this.showArr);

        this.showArr.forEach(el=>{
          if(el.original_language === 'en'){
            el.original_language = 'gb'
          } else if(el.original_language === 'it'){
            el.original_language = 'it'
          }
        })
      })
      .catch(error =>{
        console.log(error);
      })
    },
    showFunction(showValue){
      this.showInput = showValue;
      this.getAPI();
      
      console.log('value della searchbar',this.showInput);
      console.log('aaaaaaasdad',this.showArr);
    },
  },
  mounted(){
    
  },
}
</script>

<style lang="scss">
  @import './assets/style/general';

  .mb-boolflix{
    min-height: 100vh;
    background-color: #141414;
  }

</style>
