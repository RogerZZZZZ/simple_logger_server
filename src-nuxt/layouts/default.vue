<template>
  <div>
    <header></header>
    <el-container>
      <el-aside>
        <sidebar></sidebar>
      </el-aside>
      <el-main>
        <nuxt></nuxt>
      </el-main>
    </el-container>
    <footer></footer>
  </div>
</template>

<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'
  import Sidebar from '~/components/Sidebar'

  export default {
    components: {
      Header,
      Footer,
      Sidebar,
    }
  }
</script>