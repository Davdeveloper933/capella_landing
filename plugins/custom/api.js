export default (axios) => ({
  send(email) {
    return axios.post('/api/v1/subscribe', {email})
  },
  raised() {
    return axios.post('/api/v1/raised')
  },

  rates(){
    return axios.post('/api/v1/rates')
  },
  wallet({email, currency}){
    return axios.post(`/api/v1/wallet/${currency}`, {email})
  }
});
