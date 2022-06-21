<template>
<div>
    <van-nav-bar title="标题" left-text="返回" left-arrow ref="navber" @click-left="handleLeft() " @click-right="handleRight()">
        <template #left >
            {{$store.state.cityName}}<van-icon name="arrow-down" />
        </template>
        <template #right>
            <van-icon name="search" size="24" color="black"/>
        </template>
    </van-nav-bar>
    <div class="box" :style="{
            height:height
        }">
        <ul>
            <li v-for="data in $store.state.cinemaList" :key="data.cinemaId">
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
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      height: '0px'
    }
  },
  methods: {
    handleLeft () {
      // console.log('111')
      this.$router.push('/city')
      this.$store.commit('clearCinemaList')
    },
    handleRight () {
      // console.log('111')
      this.$router.push('/cinemas/search')
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight -
    this.$refs.navber.$el.offsetHeight -
    document.querySelector('footer').offsetHeight + 'px'

    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemasData', this.$store.state.cityId).then(res => {
        this.$nextTick(() => {
          new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      this.$nextTick(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=5121167`,
    //   headers: {
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then((res) => {
    //   //   console.log(res.data.data.cinemas)
    //   this.cinemaList = res.data.data.cinemas

    // this.$nextTick(() => {
    //   new BetterScroll('.box', {
    //     scrollbar: {
    //       fade: true
    //     }
    //   })
    // })
    // })
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
.box{
        // height: 38.625rem;
        overflow: hidden;
        position: relative;
    }
</style>
