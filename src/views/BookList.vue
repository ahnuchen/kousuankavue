<template>
  <div>
    <XHeader :hide-back-btn="true" title="书本列表"></XHeader>
    <div style="margin-top: -30px;">
      <div v-for="(item,index) in allBooks">
        <div :key="index" class="media-box" @click="goTo(index,$event)">
          <div class="media-box-hd">
            <img width="60" height="80"
                 :src="require(`../assets/images/book${index}.png`)" alt="口算"/>
          </div>
          <div class="media-box-bd">
            <div class="meida-title">{{item.gradeName}}</div>
            <div class="media-desc">难度:★★★</div>
            <div class="media-desc">共{{item.bookList.length}}个题型</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import XHeader from '../components/XHeader'
  import {mapGetters} from 'vuex'

  export default {
    name: "book-list",
    components: {
      XHeader
    },
    computed: {
      ...mapGetters(['allBooks'])
    },
    methods: {
      goTo(index, $event) {
        $event.preventDefault();
        this.$router.push(`/exercise/${index}`)
      }
    }
  }
</script>

<style scoped>

</style>
