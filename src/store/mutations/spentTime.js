import * as types from '../mutation-types'

export default {
  [types.SET_SPENT_TIME](state, payload) {
    state.spentTime = payload
  }
}
