<template>
<div>
  <div class="search-div">
    <input
      type="text"
      placeholder="Search for an album"
      v-model="search"
      @keyup="getAlbums"
    />
    <button type="button" class=" search-button text-white rounded-full cursor-pointer" @click="getAlbums">
          <SearchIcon class="w-6 h-6" />
    </button>
  </div>
  <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
    <album-item
      v-for="album in albums"
      :key="album.name"
      :image="album.images[0].url"
      :title="album.name"
      :release-date="album.release_date"
    />
  </div>  
</div>
</template>

<script>
import AlbumItem from './AlbumItem.vue';
import { SearchIcon } from '@heroicons/vue/solid'
export default{
    name: 'AlbumList',
    components: { AlbumItem, SearchIcon },


  mounted(){
    this.getAlbums()
  },
  data(){
    return{
      search: ''
    }
  },
  computed: {
    albums(){
      console.log(this.$store.getters['albums/albums']);
      return this.$store.getters['albums/albums'];
    }
  },
  methods: {
    getAlbums(){
      if(this.search == '') return;
      this.$store.dispatch('albums/fetchAlbums', {search: this.search});
    }
  }


}

</script>
<style scoped>
div {
  color: white;
}

.search-div {
  background-color: transparent;
}

input[type="text"], textarea {
  background-color: transparent;
  caret-color: #1db954;
  border: none;
  font-size: 22px;
}
textarea:focus, input:focus{
    outline: none;
}



</style>