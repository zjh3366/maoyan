<template>
    <div class="header">
        <i class="iconfont icon-back" @click="handleBack"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
    height: 2.75rem;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 2.75rem;
    text-align: center;
    background: white;
}
i{
    font-size: 30px;
    position: fixed;
    left: .625rem;
    top: 0;
    line-height: 2.75rem;
    height: 2.75rem;
}
</style>
