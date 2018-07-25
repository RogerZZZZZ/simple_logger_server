<template>
    <ve-line :data="chartData" :settings="config"></ve-line>
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    components: {

    },
    asyncData: async function() {
      let filters = {
        startTime: '2017/05/10',
        endTime: '2017/09/10',
      }
      let query = {
        url: '/api/visitor/scan',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(filters)
      }
      let res = await axios(query)
      console.log(res.data)
      let data = res.data.map(it => it.date = it['_id']['year'] + '' + it['_id']['month'])
      console.log(data)
      return {
        chartData: {
          columns: ['date', 'sum'],
          rows: data
        }
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
