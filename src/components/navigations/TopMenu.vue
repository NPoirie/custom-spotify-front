<template>
  <div
    id="TopNav"
    class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between"
  >
    <div class="flex items-center ml-6">
      <button type="button" class="text-white rounded-full bg-black p-[1px] cursor-pointer">
        <ChevronLeftIcon class="w-8 h-8" />
      </button>
      <button
        type="button"
        class="text-white rounded-full bg-black p-[1px] hover:bg-[#] ml-4 cursor-pointer"
      >
        <ChevronRightIcon class="w-8 h-8" />
      </button>
    </div>

    <span
      v-if="openMenu"
      class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
    >
      <ul class="text-gray-200 font-semibold text-[14px]">
        <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
        <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
      </ul>
    </span>
  </div>
</template>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
</script>
