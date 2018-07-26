<template>
  <div id="filter-type-controller" class="filter-type-controller">
    <el-radio v-model="type" label="Month" border />
    <el-radio v-model="type" label="Year" border />
    <el-radio v-model="type" label="Weekday" border />
    <el-radio v-model="type" label="Hour" border />
  </div>
</template>

<script>
  export default {
    name: 'date-type-filter-controller',
    data () {
      return {
        type: this.initVal,
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
