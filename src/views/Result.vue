<template>
  <div class="result-page">
    <XHeader :url="`/exercise/${this.bookIndex}`" title="答题结果"></XHeader>
    <div class="black-board">
      <div class="question-title">
        本次得分:
      </div>
      <div class="score">
        {{correctLength*10}}
      </div>
      <div class="t-center spend-time">总用时：{{spentTime}}</div>
    </div>
    <div class="answer-collect">
      <div v-for="(item,index) in myAnswers" :key="index" :class="item.isCorrect ?
      'answer-item correct' : 'answer-item wrong'">{{index + 1}}
      </div>
    </div>
    <div class="btn view-wrong" @click="goTo">回顾答题
    </div>
  </div>
</template>

<script>
  import XHeader from '../components/XHeader'
  import {mapGetters} from 'vuex'

  export default {
    name: "result",

    components: {
      XHeader
    },
    computed: {
      ...mapGetters(['myAnswers', 'spentTime'])
    },
    created() {
      let correctLength = 0
      this.myAnswers.forEach(item => {
        if (item.isCorrect) {
          correctLength++
        }
      });
      this.correctLength = correctLength
    },
    methods: {
      goTo() {
        this.$router.push(`/exercise/${this.bookIndex}/allwrongview/${this.chapIndex}`)
      }
    }
  }
</script>

<style scoped>

</style>
