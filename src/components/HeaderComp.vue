<template>
  <header class=" d-flex justify-content-between align-items-center">
    <div>
      <h1>BOOLFIX</h1>
    </div>
    <div class="mb-searchFilm">
    <input 
    v-model="findShow"
    @keyup.enter="$emit('showFunction',findShow)"
    type="text" placeholder="Inserisci il titolo del film">
    <button @click="$emit('showFunction',findShow)"
    >Search</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  data() {
    return {
      findShow:''
    }
  },
}
</script>

<style lang="scss" scoped>

</style>