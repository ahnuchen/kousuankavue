import * as types from '../mutation-types'

export const addAnswer = ({commit}, payload) => {
  commit(types.ADD_ANSWER, payload)
};

export const cleatAnswers = ({commit}) => {
  commit(types.CLEAR_ANSWER)
};
