export default (axios) => ({
  send(email) {
    return axios.post('/api/v1/subscribe', {email})
  },
});
