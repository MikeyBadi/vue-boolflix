<template>
    <div class="mb-card">
      <div class="mb-imgCont d-flex justify-content-center">
        <img v-if="card.poster_path != null" :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" :alt="`${card.title}`">
        <img v-else src="../assets/img/No-Image.svg.png" :alt="`${card.title}`">
      </div>
      <div class="mb-infoCont">
        <div class="mb-infoImg">
          <img v-if="card.poster_path != null" :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" :alt="`${card.title}`">
          <img v-else src="../assets/img/No-Image.svg.png" :alt="`${card.title}`">
        </div>
        <p><b>Vote: </b>{{card.vote_average}}</p>
        <p><b>Lenguage: </b><flag :iso="card.original_language"/></p>

        <p><b>Title: </b>{{card.title}}</p>
        <p><b>Original title: </b>{{card.original_title}}</p>
        <p><b>Overview: </b>{{card.overview}}</p>
      </div>
    </div>
</template>

<script>

export default {
  name:'cardCreation',
    props:{
    card: Object
  },
  data() {
    return {
      img:'image.tmdb.org/t/p/w500'
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
        transition: .8s ease;

        width: 300px;
        height: 200px;
        border-radius: 5px;
        padding: 5px;
        overflow:scroll;
        p{
          margin-bottom: 7px;
          font-size: 14px;
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