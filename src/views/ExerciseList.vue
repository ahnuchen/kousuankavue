<template>
  <div>
    <XHeader :title="currentBook.gradeName" url="/"></XHeader>
    <div class="media-box" style="margin-top: -30px;">
      <div class="media-box-hd">
        <img width="60" height="80"
             :src="require(`../assets/images/book${bookIndex}.png`)" alt="口算"/>
      </div>
      <div class="media-box-bd">
        <div class="meida-title">{{currentBook.gradeName}}</div>
        <div class="media-desc">难度:★★★</div>
        <div class="media-desc">共{{currentBook.bookList.length}}个题型</div>
      </div>
    </div>
    <h5 class="cells-title">所有题型</h5>
    <div class="cells">
      <div v-for="(item,index) in currentBook.bookList" :key="index" class="cell"
           @click="goTo(index,$event)">
        <div class="cell-title">
          {{item.name}}
        </div>
        <div class="cell-body">
        </div>
        <div class="cell-footer">
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import XHeader from '../components/XHeader'
  import {mapGetters} from 'vuex'

  export default {
    name: "exercise-list",
    components: {
      XHeader
    },
    computed: {
      ...mapGetters(['allBooks'])
    },
    created() {
      this.currentBook = this.allBooks[+this.bookIndex];
    },
    methods: {
      goTo(chapIndex, $event) {
        $event.preventDefault();
        this.$router.push(`/exercise/${this.bookIndex}/prepare/${chapIndex}`)
      }
    }
  }
</script>

<style scoped>

</style>
