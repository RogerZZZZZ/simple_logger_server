<template>
  <div>
    <my-header></my-header>
    <el-container>
      <el-aside>
        <sidebar></sidebar>
      </el-aside>
      <el-main>
        <nuxt></nuxt>
      </el-main>
    </el-container>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '~/components/Header'
  import MyFooter from '~/components/Footer'
  import Sidebar from '~/components/Sidebar'

  export default {
    components: {
      MyHeader,
      MyFooter,
      Sidebar,
    }
  }
</script>