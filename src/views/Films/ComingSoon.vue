<template>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
        <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster" alt="">
            <div class="fth">
                <div class="title">{{data.name}}</div>
                <div class="content">
                    <div class="actors">主演：{{data.actors | actorsFilter}}</div>
                    <div>{{data.nation}} | {{data.runtime}}分钟</div>
                </div>
            </div>
        </van-cell>
    </van-list>
</template>
<script>
import http from '@/util/http'
// import Vue from 'vue'

export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0
    }
  },
  methods: {
    onLoad () {
      // console.log('到底了')
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }
      this.current++
      http({
        url:
        `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=2&k=1542567`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        console.log(res.data.data.films)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    },
    handleChangePage (id) {
      this.$router.push({
        name: 'detail',
        params: {
          id
        }
      })
    }
  },
  mounted () {
    http({
      url:
        `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=2&k=1542567`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
    //   console.log(res.data.data.films)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    //   console.log(res.data.data.total)
    })
  }
}
</script>
<style lang="scss" scoped>
.van-list{
    .van-cell{
        overflow: hidden;
        padding: 15px;
        .title{
            font-size: 16px;
        }
        .content{
            font-size: 13px;
            color: gray;
            .actors{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 12.5rem;
            }
        }
        .fth{
            padding: 15px;
        }
        .hidden{
            visibility: hidden;
        }
        img{
            width: 3.75rem;
            float: left;
            margin-right: 5px;
            margin-top: 15px;
        }
    }
}
</style>
