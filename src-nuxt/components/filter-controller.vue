<template lang="pug">
  .fileter-controller-container
    .date-container
      date-filter-controller(v-model="filters.date" :initVal="initVal.date")
      date-type-filter-controller(v-model="filters.type" :initVal="initVal.type")
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
    props: [
      'initVal'
    ],
    data () {
      return {
        filters: this.initVal,
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
