<template>
  <div id="filter-type-controller" class="filter-type-controller">
    <el-radio v-model="type" label="By Month" border />
    <el-radio v-model="type" label="By Year" border />
    <el-radio v-model="type" label="By Weekday" border />
    <el-radio v-model="type" label="By Hour" border />
  </div>
</template>

<script>
  export default {
    name: 'date-type-filter-controller',
    data () {
      return {
        type: '',
      }
    },
    watch: {
      type (val) {
        this.$emit('input', val)
      }
    }
  }
  
</script>

<style scoped>

</style>
