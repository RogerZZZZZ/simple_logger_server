<template lang="pug">
  .button
    svgicon(v-if="!isCollapse" name="narrow" width="30" height="30" @click.native='toggerCollapse')
    svgicon(v-if="isCollapse" name="fullscreen" width="30" height="30" @click.native='toggerCollapse')
</template>

<script>
  import '~/static/icons'
  export default {
    name: 'expand-close-button',
    data () {
      return {
        isCollapse: true,
      }
    },
    methods: {
      toggerCollapse () {
        console.log('click')
        this.isCollapse = !this.isCollapse
        this.$emit('input', this.isCollapse)
      }
    },
  }
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
