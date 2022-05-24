<template>
  <header>
    <nav class="container d-flex justify-content-between align-items-center">
      <div class="mb-leftSide">
        <ul>
          <li>
            <img src="../assets/img/boolflix.png" alt="">
          </li>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Serie TV</p>
          </li>
          <li>
            <p>Film</p> 
          </li>
        </ul>
      </div>


      <div class="mb-rightSide">
        <ul>
          <li>
            <div class="mb-searchFilm">
              <button @click="$emit('showFunction',findShow)"
              ><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
              <input 
              v-model="findShow"
              @keyup.enter="$emit('showFunction',findShow)"
              type="text" placeholder="Inserisci il titolo del film">
            </div>
          </li>
          <li>
            <a href="#">Bambini</a>
          </li>
          <li>
            <font-awesome-icon class="bell"  icon="fa-solid fa-bell" />
          </li>
          <li>
            <div class="mb-account">
              <img src="../assets/img/baski.jpg" alt="">
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div>
          </li>
        </ul>
      </div>
    </nav>

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
@import '../assets/style/utils';
header{
  width: 100%;
  // height: 100px;
  background-color: $primary-bg;
  position: fixed;
  z-index: 9999;
  nav{
    padding: 15px 0;
    li{
    display: inline-block;

    }
    .mb-leftSide{
      height: 35px;
    img{
      height: 35px;
      margin: 0 10px;
      cursor: pointer;
    }
    p{
      margin: 0 10px;
      color: white;
      cursor: pointer;
    }
    }
    .mb-rightSide{
    height: 35px;
    color: white;

      .mb-searchFilm{
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.625);
        color: white;
        display: inline-block;
          input, button{
            background-color: rgba(0, 0, 0, 0.409);
            border: none;
            color: white;
            height: 35px;
          }
      }
      .bell{
        cursor: pointer;
      }
      a, img{
        margin: 0 20px;
      }
      a{
        color: white;
        text-decoration: none;
      }
      .mb-account{
        cursor: pointer;
        img{
          width: 35px;
          height: 35px;
          border-radius: 5px;
        }
      }
    }
  
  }

}
</style>