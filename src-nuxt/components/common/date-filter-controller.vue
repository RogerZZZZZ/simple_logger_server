<template>
  <el-date-picker
    v-model="value"
    type="daterange"
    align="right"
    unlink-panels
    range-separator="->"
    start-placeholde="Start Time"
    end-placeholde="End Time"
    value-format="yyyy-MM-dd"
    :picker-options="pickOptions">
  </el-date-picker>
</template>

<script>
  export default {
    name: 'date-filter-controller',
    data () {
      return {
        pickOptions: {
          shortcuts: [{
            text: 'Last one week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value: '',
      }
    },
    watch: {
      value (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style scoped>

</style>
