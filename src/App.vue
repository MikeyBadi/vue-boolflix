<template>
  <div class="mb-boolflix">
    <HeaderComp
    @showFunction="showFunction"
    />
    <MainComp :cards="filmArr" :cardsTv="seriesArr"/>
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
      urlAPItv:'https://api.themoviedb.org/3/search/tv',
      apiComp:{
        api_key:'9d9c00a5c5227c48a18b2cb3044f13c9',
        language:'it-IT',
        query: ''
      },
      filmArr:[],
      seriesArr:[],
    }
  },
  methods: {
    // API movie
    getAPI(){
      this.apiComp.query = this.showInput
      console.log('xxxxxxxx',this.apiComp.query);
      axios.get(this.urlAPI,{
        params:this.apiComp
      })
      .then(re=>{
        console.log(re.data.results);
        this.filmArr = re.data.results
        console.log('Array dei film',this.filmArr);

        this.filmArr.forEach(el=>{
          if(el.original_language === 'en'){
            el.original_language = 'gb'
          } else if(el.original_language === 'ja'){
            el.original_language = 'jp'
          } else if(el.original_language === 'ar'){
            el.original_language = 'sa'
          }
        })
      })
      .catch(error =>{
        console.log(error);
      })
    },
    // API Tv
    getAPItv(){
      this.apiComp.query = this.showInput
      axios.get(this.urlAPItv,{
        params:this.apiComp
      })
      .then(re=>{
        this.seriesArr=re.data.results
                this.seriesArr.forEach(el=>{
          if(el.original_language === 'en'){
            el.original_language = 'gb'
          } else if(el.original_language === 'ja'){
            el.original_language = 'jp'
          } else if(el.original_language === 'ar'){
            el.original_language = 'sa'
          }
        })
      })
      .catch(error =>{
        console.log(error);
      })
    },

    // search function
    showFunction(showValue){
      this.showInput = showValue;
      this.getAPI();
      if(this.showInput === ''){
        this.filmArr = [];
        this.seriesArr = [];
        console.log(this.filmArr);
        console.log(this.seriesArr);
      }
      this.getAPItv();
      console.log('value della searchbar',this.showInput);
      console.log('aaaaaaasdad',this.seriesArr,);
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
