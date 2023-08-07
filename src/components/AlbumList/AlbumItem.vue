<template>
        <div class="bg-[#111111] p-4 rounded-md m-2 hover:bg-[#252525]">
            <img class="rounded-md" :src="image" alt="">
            <div class="text-white pt-4 font-semibold text-[17px]">{{ title }}</div>
            <div class="text-gray-400 pt-1 pb-3 text-[14px]">{{ releaseDate }}</div>
        </div>
</template>

<script >
export default{
    name: 'AlbumItem',
    props: {
        image: String,
        title: String,
        releaseDate: String
    }
}
</script>

