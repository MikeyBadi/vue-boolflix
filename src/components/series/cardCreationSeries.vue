<template>
    <div class="mb-card">

      <div class="mb-imgCont d-flex justify-content-center">
        <img v-if="cardTv.poster_path != null" :src="`https://image.tmdb.org/t/p/original${cardTv.poster_path}`" :alt="`${cardTv.name}`">
        <img v-else src="../../assets/img/No-Image.svg.png" :alt="`${cardTv.name}`">
      </div>
      <div class="mb-infoCont">
        <div class="mb-infoImg">
          <img v-if="cardTv.backdrop_path != null" :src="`https://image.tmdb.org/t/p/original${cardTv.backdrop_path}`" :alt="`${cardTv.name}`">
          <img v-else src="../../assets/img/No-Image.svg.png" :alt="`${cardTv.name}`">
        </div>
        <p><b>Vote:</b>
        {{cardTv.vote_average}}
        <StarRating
        :increment="0.5"
        :rating="(cardTv.vote_average / 2)"
        :read-only="true"
        :star-size="14"
        :show-rating="false"
        :inline="true"
        /></p>

        <div>
          <p v-if="cardTv.original_language === 'gb'"><b>Lenguage: </b><flag iso="gb"/> / <flag iso="us"/></p>
          <p v-else><b>Lenguage: </b><flag :iso="cardTv.original_language"/></p>
        </div>

        <p><b>Name: </b>{{cardTv.name}}</p>
        <p><b>Original Name: </b>{{cardTv.original_name}}</p>
        <p><b>Overview: </b>{{cardTv.overview}}</p>
      </div>

    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name:'cardCreationSeries',
  components:{
    StarRating
  },
  props:{
    cardTv: Object
  },
  data() {
    return {
      img:'image.tmdb.org/t/p/w500',
      us_gb:'us gb'
    }
  },
}
</script>

<style lang="scss" scoped>
  .mb-card{
    width: 100%;
    height: 210px;
    position: relative;
    border-radius: 5px;
    // overflow: hidden;

    .mb-imgCont{
      img{
        display: block;
        width: 100%;
        height: 210px;
        border-radius: 5px;
      }
    }
      .mb-infoCont{
        position: absolute;
        top: 0;
        right: -60px;
        z-index: 999;
        color: white;
        background-color: black;
        display: none;
        transition: 1s ease;

        width: 300px;
        height: 200px;
        border-radius: 5px;
        padding: 5px;
        overflow:scroll;
        overflow-x: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
        .mb-infoCont::-webkit-scrollbar{
          display: none;
        }
        p{
          margin-bottom: 7px;
          font-size: 14px;
          b{
            vertical-align: bottom;
          }
        }
        .mb-infoImg{
          width: 100%;
          height: 100px;
          border-radius: 5px;
          overflow: hidden;
          img{
            width: 100%;
         }
          
        }
      }
  }
  .mb-card:hover .mb-infoCont{
    display: block;
    transform: scale(1.1);
  }
</style>