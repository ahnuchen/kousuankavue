import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions/index.js';
import mutations from './mutations/index.js';
import * as getters from './getters/index.js';
import allBooks from '../books.json'
Vue.use(Vuex);

const state = {
  allBooks,
  spentTime:"0秒",
  myAnswers:[]
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
});
