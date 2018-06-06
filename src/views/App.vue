<template lang="html">
  <div id="application">
    <transition :enter-active-class="transactionEnterLiveName"
                :leave-active-class="transactionLeaveLiveName"
    >
    <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        transactionEnterLiveName:"animated-slow fadeIn",
        transactionLeaveLiveName:"animated-slow fadeOut",
      }
  }
  }
</script>
