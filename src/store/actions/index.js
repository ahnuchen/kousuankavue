import fetchApi from './fetchApi.js';
import * as myAnswers from './myAnswers';
import * as spentTime from './spentTime';

export default {
  fetchApi,
  ...myAnswers,
  ...spentTime
};
