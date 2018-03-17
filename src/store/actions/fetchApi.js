import querystring from 'querystring';

function fetchApi({
  url,
  method = 'POST',
  params,
  json = false,
  customHeaders = {}
}) {
  const headers = new Headers();
  if (json) {
    headers.append('Content-Type', 'application/json');
  } else {
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }
  Object.keys(customHeaders).forEach((k) => {
    headers.append(k, customHeaders[k]);
  });


  const fetch_optins = {
    method,
    headers,
    credentials: 'omit'
  };

  if (params) {
    const body = json ? JSON.stringify(params) : querystring.stringify(params);
    fetch_optins.body = body;
  }

  return fetch(url, fetch_optins).then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return Promise.resolve(data);
  }).catch((err) => {
    console.log(err);
    return Promise.reject(err);
  });
}

export default ({ commit }, opts) => {
  return fetchApi(opts).then((data) => {
    commit('FETCH_SUCCESS', data);
    return Promise.resolve(data);
  }).catch((err) => {
    commit('FETCH_FAIL', err);
    return Promise.reject(err);
  });
};
