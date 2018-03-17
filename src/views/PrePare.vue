<template>
  <div class="prepare-page">
    <XHeader :url="`/exercise/${bookIndex}`" :title="currentChap.name"/>
    <div class="black-board">
      <div class="prepare">
        <h3>{{currentChap.name}}</h3>
        <p>题目数量:{{currentChap.content.exercise.length}}</p>
        <p>估计用时:3分钟</p>
      </div>
    </div>
    <div class="t-center prepare-confirm-text">
      <p>你准备好了吗?</p>
    </div>
    <div class="btn start-exercise" @click="goTo">马上开始
    </div>
  </div>
</template>
<script>

  import XHeader from '../components/XHeader'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "pre-pare",
    components: {
      XHeader
    },
    computed: {
      ...mapGetters(['allBooks'])
    },
    created() {
      this.currentBook = this.allBooks[+this.bookIndex];
      this.currentChap = this.currentBook.bookList[+this.chapIndex];
      this.clearAnswers()
    },
    methods: {
      ...mapActions(['clearAnswers']),
      goTo() {
        this.$router.push(`/exercise/${this.bookIndex}/workcard/${this.chapIndex}`)
      }
    }
  }
</script>

<style scoped>

</style>
