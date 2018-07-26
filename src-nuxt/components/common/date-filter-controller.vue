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
  import dayjs from 'dayjs'

  export default {
    name: 'date-filter-controller',
    data () {
      return {
        pickOptions: {
          shortcuts: [{
            text: 'Last one week',
            onClick(picker) {
              const end = dayjs()
              const start = end.subtract(7, 'day')
              picker.$emit('pick', [start.format(), end.format()])
            }
          }]
        },
        value: this.initVal,
      }
    },
    props: [
      'initVal'
    ],
    watch: {
      value (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style scoped>

</style>
