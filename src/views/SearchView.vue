<template>
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            ref="navber"
        />
        <ul v-if="value">
            <li v-for="data in computedList" :key="data.cinemaId">
                <div class="left">
                    <div class="cinema_name">{{data.name}}</div>
                    <div class="cinema_text">{{data.address}}</div>
                </div>
                <div class="right cinema_name" style="color:orange">
                    <div>￥{{data.lowPrice / 100}}起</div>
                    <div class="cinema_text">距离未知</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import obj from '@/util/mixinObj'
export default {
  mixins: [obj],
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {},
    onCancel () {
      this.$router.back()
    }
  },
  computed: {
    computedList () {
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) ||
      item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted () {
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemasData', this.$store.state.cityId)
    } else {
    //   console.log('缓存')
    }
  }
}
</script>
<style lang="scss" scoped>
li{
    padding: .9375rem;
    display: flex;
    justify-content: space-between;
    .cinema_name{
        font-size: 15px;
    }
    .cinema_text{
        color: #797d82;
        font-size: 12px;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .left{
        width: 13.125rem;
    }
}
</style>
