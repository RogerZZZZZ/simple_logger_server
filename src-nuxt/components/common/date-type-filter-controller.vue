<template lang="pug">
  #filter-type-controller.filter-type-controller
    el-radio(v-for="(item,index) in labels" :key="index" 
            v-model="type" :label="item" border)
</template>

<script>
  export default {
    name: 'date-type-filter-controller',
    data () {
      return {
        type: this.initVal,
        labels: ['Month', 'Year', 'Weekday', 'Hour'],
      }
    },
    props: [
      'initVal'
    ],
    watch: {
      type (val) {
        this.$emit('input', val)
      }
    }
  }
  
</script>

<style scoped>

</style>
