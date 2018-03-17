import * as types from '../mutation-types'


export default {
  [types.ADD_ANSWER](state, payload) {
    state.myAnswers.push(payload)
  },
  [types.CLEAR_ANSWER](state){
    state.myAnswers = []
  }
}
