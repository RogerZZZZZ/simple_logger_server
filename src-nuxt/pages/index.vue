<template>
  <div class="main-container" id="main-container">
    <filter-controller v-model="filters" :initVal="initValue"></filter-controller>

    <ve-line :data="chartData" :settings="config"></ve-line>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import dayjs from 'dayjs'
  import FilterController from '~/components/filter-controller'
  import { visitorScanQuery } from '~/queries/'

  export default {
    components: {
      FilterController
    },
    asyncData: async function() {
      const currDate = dayjs()
      const filters = {
        date: [
          currDate.subtract(1, 'year').format('YYYY-MM-DD'),
          currDate.format('YYYY-MM-DD'),
        ],
        type: 'Month',
      }
      console.log(filters)
      let query = visitorScanQuery(filters)
      let res = await axios(query)
      let data = res.data
      data.map(it => it.date = it['_id']['year'] + '/' + it['_id']['month'])
      console.log(data)
      return {
        chartData: {
          columns: ['date', 'sum'],
          rows: data
        },
        initValue: filters,
        filters,
      }
    },
    data () {
      return {
        config: {
          stack: {
            'month': ['sum']
          },
          area: true,
        },
        chartData: {
          columns: ['date', 'sum'],
          rows: [],
        }
      }
    },
    watch: {
      filters: {
        handler (val) {
          // let data = await axios(visitorScanQuery(val))
          console.log(val)
        },
        deep: true,
      }
    },
    methods: {
    },
    computed: {

    }
  }
</script>

<style scoped lang="less">
@color: #B3C0D1;

.el-header, .el-footer {
  background-color: @color;
  color: #333;
  text-align: center;
  line-height: 60px;
}
  
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
