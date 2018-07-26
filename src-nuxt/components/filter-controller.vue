<template>
  <div class="filter-controller-container">
    <div class="date-controller">
      <date-filter-controller v-model="date"/>
    </div>
  </div>
</template>

<script>
  import DateFilterController from './common/date-filter-controller'

  export default {
    name: 'filter-controller',
    components: {
      DateFilterController
    },
    data () {
      return {
        date: '',
      }
    },
  }
</script>

<style scoped>

</style>
