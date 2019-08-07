<template>
  <div class="counter-warp">
    <van-button type="primary" @click="getInfo">主要按钮</van-button>
    <van-search :value="search" placeholder="请输入搜索关键词" />
    <text>{{text1}}</text>
    <text>{{text1}}</text>
  </div>
</template>

<script>
// Use Vuex
import {findAllByTenantCodeAndType} from '../../httpconfig/api'
export default {
  computed: {
    count () {
    }
  },
  data(){
    return {
      search: '',
      text1: ''
    }
  },
  methods: {
    getInfo() {
      findAllByTenantCodeAndType({
         token: 'SybYTtt8NPInVnROB1VP2KiBesVDkLqs',
         tenantCode: '08d5f0c68cc94b94af8c9d1dee768cb9',
       })
       .then(d=>{
         debugger
         this.text1 = JSON.stringify(d.data)
       })
       .catch((e) => console.log("error", e))
    }
  },
  onShow(){
    console.log(this.$store.state.msg)
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
