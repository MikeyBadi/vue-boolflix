<template>
  <div class="mb-boolflix">
    <div>
      <HeaderComp
      @showFunction="showFunction"
      />
      <div>
        <div class="d-flex justify-content-center flex-wrap mb-fullCont"
        v-if="apiComp.query===''">
        <div class="jumbotron">
          <h1 v-if="openArr[counterImg].title">{{openArr[counterImg].title}}</h1>
          <h1 v-else>{{openArr[counterImg].name}}</h1>
          <img :src="`https://image.tmdb.org/t/p/original${openArr[counterImg].backdrop_path}`" alt="">
        </div>
          <openMainComp
            v-for="(cardOpen,index) in openArr"
            :key="`cardOpen-${index}`"
            :cardOpen="cardOpen"
          />          
      </div>

      <MainComp 
      v-else
      :cards="filmArr"
      :cardsTv="seriesArr"
      :cardsOpen="openArr"
      :searchOptn="this.apiComp.query"/>
      </div>
    </div>      
  </div>

</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import openMainComp from './components/open/openMainComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios';



export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    openMainComp
  },
  data() {
    return {
      showInput:'',
      counterImg: 0,
      // API serie/film
      urlAPI:'https://api.themoviedb.org/3/search/movie',
      urlAPItv:'https://api.themoviedb.org/3/search/tv',
      apiComp:{
        api_key:'9d9c00a5c5227c48a18b2cb3044f13c9',
        language:'it-IT',
        query: ''
      },
      // API Open
      urlAPIopen:'https://api.themoviedb.org/3/trending/all/day',
      apiCompOpen:{
        api_key:'9d9c00a5c5227c48a18b2cb3044f13c9',
        language:'it-IT',
      },
      
      openArr:[],
      filmArr:[],
      seriesArr:[],
      // notFound:false,
      // prova:false,
      // provaTv:false,
    }
  },
  mounted(){
    this.getAPIopen()
    this.autoPhoto = setInterval(() =>{

      this.nextPhoto();

    }, 3000)
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

        this.seriesArr.forEach(el=>{
          if(el.original_language === 'en'){
            el.original_language = 'gb'
          } else if(el.original_language === 'ja'){
            el.original_language = 'jp'
          } else if(el.original_language === 'ar'){
            el.original_language = 'sa'
          }else if(el.original_language === 'ko'){
            el.original_language = 'kr'
          }else if(el.original_language === 'zh'){
            el.original_language = 'cn'
          }
        })
      // if(this.filmArr.length == 0 && this.showInput != ''){
      //   this.prova = true;
      // }   
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
          }else if(el.original_language === 'ko'){
            el.original_language = 'kr'
          }else if(el.original_language === 'zh'){
            el.original_language = 'cn'
          }
        })
      // if(this.seriesArr.length == 0 && this.showInput != ''){
      //   this.provaTv = true;
      // }
      })
      .catch(error =>{
        console.log(error);
      })
    },

    // API open
    getAPIopen(){
      axios.get(this.urlAPIopen,{
        params:this.apiCompOpen
      })
      .then(re=>{
        this.openArr=re.data.results
        this.seriesArr.forEach(el=>{
          if(el.original_language === 'en'){
            el.original_language = 'gb'
          } else if(el.original_language === 'ja'){
            el.original_language = 'jp'
          } else if(el.original_language === 'ar'){
            el.original_language = 'sa'
          }else if(el.original_language === 'ko'){
            el.original_language = 'kr'
          }else if(el.original_language === 'zh'){
            el.original_language = 'cn'
          }
      })

      console.log(this.openArr);
      // if(this.seriesArr.length == 0 && this.showInput != ''){
      //   this.provaTv = true;
      // }
      })
      .catch(error =>{
        console.log(error);
      })
    },

    // search function
    showFunction(showValue){
      this.showInput = showValue;
      this.getAPI();
      this.getAPItv();

        
      if(this.showInput === ''){
        this.filmArr = [];
        this.seriesArr = [];
      }

      // if(this.prova === true && this.provaTv === true){
      //   this.notFound = true;
      // }   

      // console.log('--------', this.prova)
      // console.log('--------', this.provaTv)
      // console.log('--------', this.notFound)
      // console.log('--------', this.filmArr);
      // console.log('--------', this.seriesArr);
      


      // CAROUSEL
      
    },
    nextPhoto(){
      this.counterImg++
      if(this.counterImg>this.openArr.length - 1){
          this.counterImg = 0
      }
      console.log(this.counterImg); 
    }
    
  },
}
</script>

<style lang="scss">
  @import './assets/style/general';

  .mb-boolflix{
    min-height: 100vh;
    background-color: #141414;
  }
  .mb-fullCont{
    // padding-top: 100px;
    padding-bottom: 30px;
  }

  .jumbotron{
    img{
      overflow-x: hidden;
      width: 100%;
      margin-bottom: 30px;
      position: relative;
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 70%, transparent 100%);
    }

    h1{
      position: absolute;
      bottom: 0px;
      left: 0;
      z-index: 9;
      color: white;
      margin: 30px;
    }
  }

</style>
