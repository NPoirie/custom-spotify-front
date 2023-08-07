<template>
  <div>
 
      <album-list/>

  </div>
</template>
<script>
import AlbumList from '../components/AlbumList/AlbumList.vue'
export default {
  components: { AlbumList },

}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
