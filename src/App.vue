<script setup>
import SideMenu from '/src/components/navigations/SideMenu.vue'
// import TopMenu from '/src/components/navigations/TopMenu.vue'
</script>

<template>
  <div>
    <!-- <TopMenu /> -->
    <SideMenu />
    <div
        class="
            fixed
            right-0
            top-0
            w-[calc(100%-240px)]
            overflow-auto
            h-full
            bg-gradient-to-b
            from-[#1C1C1C]
            to-black
        "
    >
    <router-view/>
    </div>
  </div>
</template>
