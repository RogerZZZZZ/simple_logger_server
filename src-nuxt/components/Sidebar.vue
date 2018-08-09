<template lang="pug">
  div
    expand-close-button(v-model='isCollapse')
    el-menu.el-menu-verticle-demo(default-active='1' @open='handleOpen' @close='handleClose' :collapse='isCollapse' router)
      el-submenu(index='1')
        template(slot='title')
          i.el-icon-location
          span(slot='title') Nav One
        el-menu-item-group
          span(slot='title') Group One
          el-menu-item(index='1-1') Option One
          el-menu-item(index='1-2') Option Two
</template>

<script>
  import ExpandCloseButton from '~/components/common/expand-close-button'
  export default {
    components: {
      ExpandCloseButton
    },
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
