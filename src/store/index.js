import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import actions from './actions/index.js';
import mutations from './mutations/index.js';
import * as getters from './getters/index.js';
import questionsData from '../allbooks.json'

let allBooks = questionsData.map(gradeItem => {
  gradeItem.bookList = gradeItem.bookList.map(bookItem => {
      let allExercise = bookItem.content.exercise;
      let newExercise = [];
      let randomNums = [];
      while (newExercise.length < 10) {
          let randomNum = Math.floor(Math.random() * allExercise.length);
          if (!randomNums.includes(randomNum)) {
              randomNums.push(randomNum);
              newExercise.push(allExercise[randomNum])
          }
      }
      bookItem.content.exercise = newExercise;
      return bookItem
  });
  return gradeItem
});

Vue.use(Vuex);

const state = {
  count: 0,
  pageData: {},
  allBooks,
  spentTime:"0秒",
  myAnswers:[]
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: process.env.NODE_ENV !== 'pro'
    ? [createLogger()]
    : []
});
