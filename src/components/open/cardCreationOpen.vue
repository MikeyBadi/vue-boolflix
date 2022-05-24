<template>
    <div class="mb-card">

      <div class="mb-imgCont d-flex justify-content-center">
        <img v-if="cardOpen.poster_path != null" :src="`https://image.tmdb.org/t/p/original${cardOpen.poster_path}`" :alt="`${cardOpen.title}`">
        <img v-else src="../../assets/img/No-Image.svg.png" :alt="`${cardOpen.title}`">
      </div>
      <div class="mb-infoCont">
        <div class="mb-infoImg">
          <img v-if="cardOpen.backdrop_path != null" :src="`https://image.tmdb.org/t/p/original${cardOpen.backdrop_path}`" :alt="`${cardOpen.title}`">
          <img v-else src="../../assets/img/No-Image.svg.png" :alt="`${cardOpen.title}`">
        </div>
        <p><b>Vote:</b>
        {{cardOpen.vote_average}}
        <StarRating
        :increment="0.5"
        :rating="(cardOpen.vote_average / 2)"
        :read-only="true"
        :star-size="14"
        :show-rating="false"
        :inline="true"
        /></p>

          <p v-if="cardOpen.original_language === 'en'"><b>Lenguage: </b><flag iso="gb"/> / <flag iso="us"/></p>
          <p v-else><b>Lenguage: </b><flag :iso="cardOpen.original_language"/></p>

        <p v-if="cardOpen.title"><b>Title: </b>{{cardOpen.title}}</p>
        <p v-else ><b>Title: </b>{{cardOpen.name}}</p>
        <p><b>Original title: </b>{{cardOpen.original_title}}</p>
        <p><b>Overview: </b>{{cardOpen.overview}}</p>
      </div>

    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name:'cardCreationOpen',
  components:{
    StarRating
  },
  props:{
    cardOpen: Object,
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
        top: -30px;
        right: -35px;
        z-index: 999;
        color: white;
        background-color: black;
        display: none;
        transition: 1s ease;

        width: 240px;
        height: 280px;
        border-radius: 5px;
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
          padding: 0 10px;
        }
        .mb-infoImg{
          width: 100%;
          height: 160px;
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
    transform: scale(1.15);
  }
</style>