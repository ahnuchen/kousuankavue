
export const allBooks = (state) => {
  return state.allBooks
};
export const myAnswers = state => {
  return state.myAnswers
};

export const spentTime = state => {
  return state.spentTime
};


export const currentBook = state => {
  return state.curretBookIndex ? state.questions[state.currentBookIndex] : []
};
