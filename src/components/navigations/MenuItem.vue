<template>
  <li class="flex items-center mb-4 cursor-pointer" @mouseenter="isHover()" @mouseleave="isHover()">
    <img :src="`/src/assets/icons/${iconName}.png`" :width="iconSize" class="mr-3" />
    <div :class="`text-sm font-bold ${isSelect ? 'text-white' : 'text-gray-400'}`" @click="goTo()">
      <span :class="`${isHovering ? 'text-white' : 'text-gray-400'}`">{{ name }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    iconSize: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    iconString: {
      type: String,
      required: true
    },
    pageUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isSelect: false,
      isHovering: false
    }
  },
  computed: {
    iconName() {
      return this.isSelect
        ? `${this.iconString}-active`
        : this.isHovering
        ? `${this.iconString}-inactive-hover`
        : `${this.iconString}-inactive`
    }
  },
  methods: {
    goTo() {
      this.$router.push({
        name: this.pageUrl
      })
    },
    isHover() {
      this.isHovering = !this.isHovering
    }
  }
}
</script>
