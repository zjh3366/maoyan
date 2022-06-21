<template>
    <div v-if="filmsInfo">
    <detail-header v-scroll="50">
        {{filmsInfo.name}}
    </detail-header>
        <div
        :style="{
            backgroundImage: 'url(' + filmsInfo.poster + ')',
        }"
        class="poster"
        ></div>
        <div class="content">
             <div>{{ filmsInfo.name }}</div>
      <div>
        <div class="detail-text">{{ filmsInfo.category }}</div>
        <div class="detail-text">
          {{ filmsInfo.premiereAt | dateFilter }}上映
        </div>
        <div class="detail-text">
          {{ filmsInfo.nation }} | {{ filmsInfo.runtime }}分钟
        </div>
        <div
          class="detail-text"
          style="line-height: 15px"
          :class="isHidden ? 'hidden' : ''"
        >
          {{ filmsInfo.synopsis }}
        </div>

        <div style="text-align: center">
          <i
            class="iconfont"
            @click="isHidden = !isHidden"
            :class="isHidden ? 'icon-moreunfold' : 'icon-less'"
          ></i>
        </div>
      </div>

       <div>
        <div>演职人员</div>
        <detail-swiper :perview="3.5" name="actors">
          <detail-swiper-item
            v-for="(data, index) in filmsInfo.actors"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data.avatarAddress + ')',
              }"
              class="avatar"
            >
            </div>
            <div style="text-align:center;font-size:12px">{{ data.name }}</div>
            <div style="text-align:center;font-size:13px">{{ data.role }}</div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
      <!-- 剧照 -->
       <div>
        <div>剧照</div>
        <detail-swiper :perview="2" name="photos">
          <detail-swiper-item
            v-for="(data, index) in filmsInfo.photos"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data + ')',
              }"
              class="avatar"
              @click="handlePreview(index)"
            ></div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
        </div>
    </div>
</template>
<script>
import http from '@/util/http'
import obj from '@/util/mixinObj'
import moment from 'moment'
import Vue from 'vue'
import detailSwiper from '@/components/detail/DetailSwiper'
import detailHeader from '@/components/detail/DetailHeader'
import detailSwiperItem from '@/components/detail/DetailSwiperItem'
import { ImagePreview } from 'vant'
moment.locale('zh-cn') // 设置成中文
Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})
Vue.directive('scroll', {
  inserted (el, binding) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  mixins: [obj],
  data () {
    return {
      filmsInfo: null,
      isHidden: true
    }
  },
  methods: {
    handlePreview (index) {
      ImagePreview({
        images: this.filmsInfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    }
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  created () {
    // 当前匹配的路由
    // console.log('created', this.$route.params.id)

    // axios 利用 id 发请求到详情接口 ，获取详细数据 ，布局页面

    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=5501344`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
    //   console.log(res.data.data.film)
      this.filmsInfo = res.data.data.film
    })
  }
}
</script>
<style lang="scss" scoped>
.poster{
    width: 100%;
    height: 13.125rem;
    background-position: center;
    background-size: cover;
}
.content {
  padding: 0.833333rem;
  .detail-text {
    color: #797d82;
    font-size: 13px;
    margin-top: 0.222222rem;
  }
}
.hidden {
  overflow: hidden;
  height: 30px;
}
.avatar{
  width: 100%;
  height: 4.722222rem;
  background-position: center;
  background-size: cover;
}
</style>
