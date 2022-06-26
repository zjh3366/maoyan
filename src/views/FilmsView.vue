<template>
    <div>
        <film-swiper :key="datalist.length">
            <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem">
              <img :src="data.imgUrl" alt="">
            </film-swiper-item>
        </film-swiper>
       <film-header class="sticky"></film-header>
        <router-view></router-view>
    </div>
</template>

<script>
import FilmSwiper from '@/components/Films/FilmSwiper'
import FilmHeader from '@/components/Films/FilmHeader'
import FilmSwiperItem from '@/components/Films/FilmSwiperItem'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/banner.json').then(res => {
      // console.log(res.data)
      this.datalist = res.data.banner
      // console.log(this.datalist)
    })
  },
  components: {
    FilmSwiper,
    FilmSwiperItem,
    FilmHeader
  }
}
</script>

<style lang="scss" scoped>
.filmswiperitem{
  img{
    width: 100%;
  }
}
.sticky{
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}
</style>
