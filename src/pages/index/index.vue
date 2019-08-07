<template>
  <div @click="clickHandle">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @clickLeft="onClickLeft"
      @clickRight="onClickRight"
    />
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
    }
  },

  components: {
    card
  },

  methods: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    onClickLeft() {
      console.log('返回')
    },
    onClickRight() {
      console.log('按钮')
    }
  },

  created () {
    // let app = getApp
    const res = wx.getSystemInfoSync()
    console.log(res);
  },
  onShow(){
    console.log(this.$store.state.msg)
  }
}
</script>

<style scoped>
</style>
