<script setup>
import { RouterLink } from 'vue-router'
import MenuItem from '/src/components/navigations/MenuItem.vue'
</script>

<template>
  <div id="SideMenu" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
    <RouterLink to="/">
      <img width="125" src="/src/assets/icons/spotify-logo.png" />
    </RouterLink>
    <div class="my-8"></div>
    <ul>
      <RouterLink to="/">
        <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
      </RouterLink>
        <MenuItem
          class="ml-[1px]"
          :iconSize="24"
          name="Search"
          iconString="search"
          pageUrl="search"
        />
      <RouterLink to="/library">
        <MenuItem
          class="ml-[2px]"
          :iconSize="23"
          name="Your Library"
          iconString="library"
          pageUrl="library"
        />
      </RouterLink>
    </ul>
    <div class="border-b border-b-gray-700"></div>
  </div>
</template>

<script>
export default {
  components: {
    MenuItem,
    RouterLink
  }
}
</script>
