import * as fetchApi from './fetchApi.js';
import myAnswers from './myAnswers'
import spentTime from './spentTime'

export default {
  ...spentTime,
  ...myAnswers,
  ...fetchApi
};
