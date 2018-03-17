import * as types from '../mutation-types'

export const addAnswer = ({commit}, payload) => {
  commit(types.ADD_ANSWER, payload)
};

export const clearAnswers = ({commit}) => {
  commit(types.CLEAR_ANSWER)
};
