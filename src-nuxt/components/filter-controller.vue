<template>
  <div class="filter-controller-container">
    <div class="date-controller">
      <date-filter-controller v-model="filters.date"/>
      <date-type-filter-controller v-model="filters.type"/>
    </div>
  </div>
</template>

<script>
  import DateFilterController from './common/date-filter-controller'
  import DateTypeFilterController from './common/date-type-filter-controller'

  export default {
    name: 'filter-controller',
    components: {
      DateFilterController,
      DateTypeFilterController,
    },
    data () {
      return {
        filters: {
          date: '',
          type: '',
        },
      }
    },
    watch: {
      filters: {
        handler (val) {
          this.$emit('input', val)
        },
        deep: true,
      }
    }
  }
</script>

<style scoped>

</style>
