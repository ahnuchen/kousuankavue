<template>
  <div v-if="!isWeixin" class="header">
    <template v-if="!hideBackBtn">
      <span class="back-btn"><router-link :to="url" class="link-href"><span
        :style='{fontSize}'>&lt;</span>返回</router-link></span>
    </template>
    <span class="title">{{title}}</span>
  </div>
  <div v-else :style="{marginBottom}"></div>
</template>

<script>
  export default {
    name: "x-header",
    data() {
      return {
        fontSize: "20px",
        marginBottom: "20px"
      }
    },
    props: {
      url: {
        type: String,
        default: '/'
      },
      title: {
        type: String,
        default: '小学口算卡'
      },
      hideBackBtn: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isWeixin() {
        let ua = window.navigator.userAgent.toLowerCase();
        return (ua.match(/MicroMessenger/i) == 'micromessenger');
      }
    }
  }
</script>
