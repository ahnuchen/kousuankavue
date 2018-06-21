<template>
  <div>
    <XHeader :url="`/exercise/${this.bookIndex}`" title="口算练习"/>

    <div class="black-board">
      <div class="board-header">
                        <span class="timeCounter">
                          🕙<TimeCounter ref="timeCounter"></TimeCounter>
                        </span>
        <span class="progress">
                            {{`${currentExerciseIndex + 1}/${exercises.length}`}}
                        </span>
      </div>
      <div class="question-title">
        {{question.text}}:
      </div>
      <div class="exercise-content" v-html="exerciseContent"></div>
    </div>

    <div class="keyboard-container">
      <div class="keyboard-left">

        <div v-for="(_item,_index) in [[1, 2, 3,], [4, 5, 6], [7, 8, 9], lastKeyRows]" class="keyboard-row"
             :key="_index">
          <button @click="handleNumberClick(item)" :key="index" v-for="(item,index) in _item"
                  class="key">{{item}}
          </button>
        </div>
      </div>
      <div class="keyboard-right">
        <button class="del" @click="handleDelClick">
          删除
        </button>
        <div class="next" @click="handleNextExerciseClick">
          {{currentExerciseIndex === exercises.length - 1 ? "交卷" : "下一题"}}
        </div>
      </div>
    </div>

    <DialogAlert v-on:onLeftClick="onLeftClick" v-on:onRightClick="onRightClick"
                 v-show="showDialog"></DialogAlert>
  </div>
</template>

<script>

  import DialogAlert from '../components/DialogAlert'
  import TimeCounter from '../components/TimeCounter'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "work-card",
    components: {
      DialogAlert,
      TimeCounter
    },
    computed: {
      ...mapGetters(['allBooks'])
    },
    data() {
      return {
        currentAnswer: "",
        showDialog: false,
        currentExerciseIndex: 0,
        exerciseContent: ""
      }
    },

    created() {
      this.currentBook = this.allBooks[+this.bookIndex];
      this.currentChap = this.currentBook.bookList[+this.chapIndex];
      this.exercises = this.currentChap.content.exercise;
      this.render()
    },
    methods: {
      ...mapActions(['setSpentTime', 'addAnswer']),
      getTime(data) {
        console.log(data)
        this.setSpentTime(data)
      },
      render() {
        let {currentExerciseIndex, exercises, currentAnswer} = this;
        let {question, description} = exercises[currentExerciseIndex];
        let {attach} = question;
        let innerPos, lastKeyRows;
        if (!description.includes("分数") || description.includes("百分数")) {
          innerPos = attach.indexOf('</div>');
          lastKeyRows = [0, ".", "00"]
        } else {
          innerPos = attach.indexOf('</div></div>');
          lastKeyRows = [0, ".", "/"]
        }
        this.exerciseContent = attach.substring(0, innerPos) + currentAnswer + attach.substring(innerPos, attach.length);
        this.lastKeyRows = lastKeyRows;
        this.question = question;
        this.description = description;
      },
      handleNumberClick(num) {
        let {currentAnswer, exercises, currentExerciseIndex} = this;
        let correctLength = (exercises[currentExerciseIndex].answer.correct + "").length;
        if (currentAnswer.length < correctLength + 2) {
          if (!(currentAnswer.indexOf(".") !== -1 && num === ".")) {
            currentAnswer += num;
            if (currentAnswer === ".") currentAnswer = "0.";
            this.currentAnswer = currentAnswer
          }
        }
      },
      submitAnswers(){
        this.setSpentTime(this.$refs.timeCounter.countString);
        return this.$router.push(`/exercise/${this.bookIndex}/result/${this.chapIndex}`)
      },
      handleNextExerciseClick() {
        let {currentExerciseIndex, exercises, currentAnswer} = this;
        let currentExercise = exercises[currentExerciseIndex];
        if (currentAnswer.length === 0) {
          return this.showDialog = true
        }

        this.addAnswer({
          correct: currentExercise.answer.correct,
          description: currentExercise.description,
          myanswer: currentAnswer,
          question: currentExercise.question.attach,
          isCorrect: ("" + currentExercise.answer.correct) === ("" + currentAnswer)
        });

        currentExerciseIndex++;

        if (currentExerciseIndex === exercises.length) {
          return this.submitAnswers()
        } else {
          this.currentAnswer = currentAnswer;
          this.currentExerciseIndex = currentExerciseIndex;
        }
      },
      handleDelClick() {
        this.currentAnswer = this.currentAnswer.substring(0, this.currentAnswer.length - 1)
      },
      onLeftClick() {
        let {currentExerciseIndex, exercises, currentAnswer} = this;
        let currentExercise = exercises[currentExerciseIndex]
        this.addAnswer({
          correct: currentExercise.answer.correct,
          description: currentExercise.description,
          myanswer: currentAnswer,
          question: currentExercise.question.attach,
          isCorrect: ("" + currentExercise.answer.correct) === ("" + currentAnswer)
        });
        currentExerciseIndex++;
        if (currentExerciseIndex === exercises.length) {
          return this.submitAnswers()
        }
        this.showDialog = false;
        this.currentExerciseIndex = currentExerciseIndex;
      },
      onRightClick() {
        this.showDialog = false
      }
    },
    watch: {
      'currentExerciseIndex': function () {
        this.currentAnswer = "";
        this.render()
      },
      'currentAnswer': function () {
        this.render();
      }
    }
  }
</script>

