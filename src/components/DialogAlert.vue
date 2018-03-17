<template>
  <div>
    <div class="mask"></div>
    <div class="dialog-alert slideInUp animated">
      <div class="dialog-body">
        <div class="title">
          {{title}}
        </div>
        <div class="content">
          {{content}}
        </div>
        <div class="btn-area">
          <div class="btn-left" @click="leftClick">
            {{leftText}}
          </div>
          <div class="btn-right" @click="rightClick">
            {{rightText}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dialog-alert",
    props: {
      title: {
        type: String,
        default: "系统提示"
      },
      content: {
        type: String,
        default: "你真的要放弃这道题吗"
      },
      leftText: {
        type: String,
        default: "放弃"
      },
      rightText: {
        type: String,
        default: "不放弃"
      }
    },
    methods: {
      leftClick() {
        this.$emit('onLeftClick')
      },
      rightClick() {
        this.$emit('onRightClick')
      }
    }
  }
</script>

