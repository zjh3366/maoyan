<template>
  <div>
    <tabbar-view v-show="this.$store.state.isTabbarShow"></tabbar-view>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import TabbarView from '@/components/TabbarView'
// import Vant from 'vant'
// import Vue from 'vue'
// import 'vant/lib/index.css'

// Vue.use(Vant)
export default {
  data () {
    return {

    }
  },
  components: {
    TabbarView
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding: 0;
}
body{
  height: 100%;
}
ul{
  list-style: none;
}
.kerwinactive{
  color:red;
}
section{
  margin-bottom: 3.0625rem;
}
</style>
