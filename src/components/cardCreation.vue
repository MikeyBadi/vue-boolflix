<template>
    <div class="mb-card">
      <div class="mb-imgCont">
        <img :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" :alt="`${card.title}`">
      </div>
      <div class="mb-infoCont">
        <p>Title: {{card.title}}</p>
        <p>Original title: {{card.original_title}}</p>
        <p>Lenguage: {{card.original_language}}</p>
        <p>Vote: {{card.vote_average}}</p>
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
    width: 150px;

    .mb-imgCont{
      position: relative;
        display: inline-block;
      img{
        width: 150px;
      }
      .mb-infoCont{
        position: absolute;
        z-index: 999;
        color: white;
        background-color: rgba(0, 0, 0, 0.336);

      }
    }
  }
</style>