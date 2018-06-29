<template>
  <el-container>
    <el-header>Header1</el-header>
    <el-container>
      <el-aside width="200px">
        <router-view name="sidebar"></router-view>
      </el-aside>
      <el-main>
        <div>sss</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: 'sidebar'
    }
</script>

<style scoped>

</style>

