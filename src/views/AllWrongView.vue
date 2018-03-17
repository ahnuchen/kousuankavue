<template>
  <div class="allwrongview-page">
    <XHeader :url="`/exercise/${this.bookIndex}`" title="全部解析"/>
    <div :class="currentExercise.isCorrect ? 'black-board correct' : 'black-board wrong'">
      <div class="board-header">
                        <span class="timeCounter">
                        </span>
        <span class="progress">
                            {{`${currentExerciseIndex + 1}/${myAnswers.length}`}}
                        </span>
      </div>
      <div class="question-title">
        你的答案:
      </div>
      <div class="exercise-content" v-html="exerciseContent"></div>
    </div>
    <div v-if="currentExercise.isCorrect" class="your-answer">
      <p>恭喜你</p>
      <h2>回答正确</h2>
    </div>
    <div v-else class="your-answer">
      <p>正确答案是:</p>
      <p class="correct">{{currentExercise.correct}}</p>
    </div>
    <div class="ctrl-area">
      <div class="prev-btn" :style="{visibility:(currentExerciseIndex!==0)?'initial':'hidden'}" @click="prevQuestion">
        上一题
      </div>
      <div class="next-btn" :style="{visibility:currentExerciseIndex!==(myAnswers.length - 1)?'initial':'hidden'}"
           @click="nextQuestion">下一题
      </div>
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
      ...mapGetters(['myAnswers'])
    },
    data() {
      return {
        currentExerciseIndex: 0
      }
    },
    created() {
      this.render()
    },
    methods: {
      goTo() {
        this.$router.push(`/exercise/${this.bookIndex}/allwrongview/${this.chapIndex}`)
      },
      render() {
        let {myAnswers, currentExerciseIndex} = this;
        let currentExercise = myAnswers[currentExerciseIndex];
        let {question, description} = currentExercise;
        let innerPos;
        if (!description.includes("分数") || description.includes("百分数")) {
          innerPos = question.indexOf('</div>');
        } else {
          innerPos = question.indexOf('</div></div>');
        }
        this.currentExercise = currentExercise;
        this.exerciseContent = question.substring(0, innerPos) + currentExercise.myanswer + question.substring(innerPos, question.length)
      },
      nextQuestion() {
        this.currentExerciseIndex++;
        if (this.currentExerciseIndex > this.myAnswers.length - 1) this.currentExerciseIndex = this.myAnswers.length - 1

      },
      prevQuestion() {
        this.currentExerciseIndex--;
        if (this.currentExerciseIndex < 0) this.currentExerciseIndex = 0
      }
    },
    watch: {
      'currentExerciseIndex': function () {
        this.render();
      }
    }
  }
</script>
