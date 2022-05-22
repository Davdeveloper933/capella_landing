const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const TELEGRAM_REGEXP =
  /^@[a-zA-Z0-9_-]{5,64}$/;


export default () => ({
  delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  validateEmail(email){
    return EMAIL_REGEXP.test(email);
  },

  validateEmailOrTelegram(email){
    return EMAIL_REGEXP.test(email) || TELEGRAM_REGEXP.test(email);
  }
});
