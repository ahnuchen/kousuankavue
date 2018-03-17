import * as types from '../mutation-types'

export const setSpentTime = ({commit}, payload) => {
  commit(types.SET_SPENT_TIME, payload)
};
