<template>
  <div class="section-intro" id="home">
    <div class="">
      <h1 class="section-intro__title">
        <div class="section-intro__welcome-wrapper">
          <span class="section-intro__welcome-wrapper__top-left-line"></span>
          <span class="section-intro__welcome-wrapper__text">WELCOME TO</span>
          <span class="section-intro__welcome-wrapper__top-right-line"></span>
          <section-title>
            Capella
            <template #stroked-text> Finance </template>
          </section-title>
        </div>
      </h1>
      <div class="section-intro__browser">
        <picture>
          <source media="(max-width: 375px)" srcset="img/neon_small.png" />
          <img class="neon-img" src="img/neon.png" alt="" />
        </picture>
        <img class="spline-left" src="img/spline_left.png" alt="" />
        <img class="spline-right" src="img/spline_right.png" alt="" />
        <div class="section-intro__browser__inner" id="intro-form">
          <div class="section-intro__browser-header">
            <div class="section-intro__browser-header-wrapper">
              <div>
                <img src="img/traffic_lights.png" alt="" />
              </div>
              <div class="section-intro__browser-searchbar">
                <span class="section-intro__browser-searchbar__text">
                  <img src="svg/lock.svg" alt="" />
                  capella.finance
                </span>
                <img class="refresh-img" src="svg/refresh.svg" alt="" />
              </div>
              <img src="svg/toolbar.svg" alt="" />
            </div>
          </div>
          <img class="ethereum-logo" src="img/ethereum_logo.png" alt="" />
          <img class="bitcoin-logo" src="img/bitcoin_logo.png" alt="" />
          <!--          <div class="section-intro__browser__inner-img">-->
          <a href="#funds" class="down-btn">
          <ui-btn>
            <img src="svg/down.svg" alt="" />
          </ui-btn>
          </a>
          <!--          </div>-->
          <div class="section-intro__browser__content">
            <div>
              <Dashboard v-if="!showByForm" :raised="raised" />
              <BuyPlane v-if="showByForm" :email="email" :raised="raised"/>
              <Runner  :raised="raised" :tokens="tokens" />
              <ui-button @click="showByForm = !showByForm" class="section-funds__button">
                Connect Wallet
              </ui-button>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import UiBtn from "~/components/ui/ui-btn.global";
import SectionTitle from "~/components/ui/ui-section-title.global";
import UiButton from "~/components/ui/ui-button.global";
import Dashboard from '~/components/Dashboard'
import Runner from '~/components/Runner'
export default {
  name: "IntroSection",
  components: { Runner, Dashboard, UiButton, UiBtn, SectionTitle },
  data() {
    return {
      raised: 250000,
      tokens: 15000000,
      email: "",
      isSend:false,
      isShowError:false,
      showByForm: false,
    }
  },
  methods: {
    showBuy(email) {
      this.email = email
      this.showByForm = true
    },
    async send(){
      console.log("click")
      if(!this.isValid){
        this.isShowError = true
        await this.$utils.delay(2000)
        this.isShowError = false
        this.isSend = false
        this.email = ""
      }else{
        this.isShowError = false
        await this.$api.send(this.email)
        this.showBuy(this.email)
        this.isSend = true
        this.email = ""
      }
    }
  },
  computed: {
    isValid() {
      return this.email.length>0 && this.$utils.validateEmailOrTelegram(this.email);
    }
  },
  async mounted() {
    try {
      const {data} = await this.$api.raised()
      this.raised = data.raised
      this.tokens = data.tokens
    } catch (e) {
    }
  },
};
</script>

<style lang="scss" scoped>
.section-intro {
  padding-top: 112px;
  .section-funds__button {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    @media (max-width: 375px) {
      width: 100%;
    }
  }

  .column{
    display: flex;
    flex-direction: column;
  }

  .tooltip-err{
    text-align: center;
    color:#ff7a82;
    margin-top: 10px;
  }

  .valid {
    border-color: green;
  }

  .invalid {
    border-color: #ff7a82;
  }

  &__welcome-wrapper {
    border-bottom: 0.6px solid #FFFFFF;
    /*border-top: 0.6px solid #FFFFFF;*/
    padding: 5px 0;
    position: relative;
    @media screen and (max-width: 767px) {
      border: none;
      padding: 10px 0 0 0;
    }
    &__top-left-line {
      width: 41%;
      height: 0.6px;
      top: 0;
      display: block;
      position: absolute;
      background-color: #FFFFFF;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    &__top-right-line {
      top: 0;
      width: 41%;
      height: 0.6px;
      display: block;
      position: absolute;
      right: 0;
      background-color: #FFFFFF;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    &__text {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
      position: absolute;
      left: 50%;
      top: -11px;
      transform: translate(-50%, 0%);
      @media screen and (max-width: 1280px) {
        font-size: 15px;
      }
      @media screen and (max-width: 1199px) {
        font-size: 15px;
      }
      @media screen and (max-width: 1020px) {
        font-size: 14px;
      }
      @media screen and (max-width: 991px) {
        font-size: 14px;
      }
      @media screen and (max-width: 850px) {
        /*position: unset;*/
        display: block;
        text-align: center;
        margin-bottom: 8px;
      }
    }
  }
  &__title {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    .section-title {
      max-width: 100%;
      @media screen and (max-width: 1280px) {
        font-size: 85px;
      }
      @media screen and (max-width: 1199px) {
        font-size: 80px;
      }
      @media screen and (max-width: 1020px) {
        font-size: 70px;
      }
      @media screen and (max-width: 991px) {
        font-size: 65px;
      }
      @media screen and (max-width: 850px) {
        font-size: 62px;
      }
      @media screen and (max-width: 607px) {
        font-size: 54px;
      }
      @media screen and (max-width: 530px) {
        font-size: 50px;
      }
      @media screen and (max-width: 500px) {
        font-size: 48px;
        display: flex;
        flex-direction: column;
        line-height: 55px;
        align-items: center;
      }
    }
  }
  &__browser {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 40px auto 0 auto;
    .neon-img {
      left: 50%;
      transform: translate(-50%, 0);
      position: absolute;
      top: -4vh;
    }
    &-searchbar {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      margin: 12px 0;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 144px;
      padding-right: 6px;
      @media screen and (max-width: 991px) {
        padding-left: 100px;
      }
      @media screen and (max-width: 767px) {
        margin: 7px 0;
        padding-left: 60px;
      }
      @media screen and (max-width: 425px) {
        background: transparent;
        padding: 6px 0;
        margin: 5px 0;
        .refresh-img {
          display: none;
        }
      }
      &__text {
        margin-right: 126px;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: -0.02em;
        color: #9288b1;
        @media screen and (max-width: 991px) {
          margin-right: 95px;
        }
        @media screen and (max-width: 767px) {
          margin-right: 60px;
        }
        @media screen and (max-width: 425px) {
          margin-right: 0;
        }
      }
    }
    &-header {
      background: rgba(16, 20, 44, 0.7);
      padding: 0 20px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: relative;
      padding-bottom: 150px;
      padding-top: 32px;
      padding-left: 20px;
      padding-right: 20px;
      &>div {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
      }
      &-img {
        width: 80%;
        text-align: center;
      }
      &-form {
        position: relative;
        &__title {
          font-family: 'Geometria',sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-align: center;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          margin-top: 16px;
        }
        &__wrapper {
          display: inline-flex;
          align-items: center;
          padding: 0;
          max-width: 470px;
          width: 100%;
          position: relative;
          @media screen and (max-width: 575px) {
            display: none;
          }
          .ui-input {
            display: flex;
            margin-right: 0;
            margin-bottom: 0;
            min-width: 300px;
            padding-right: 60px;
            width: 470px;
          }
          .ui-button {
            white-space: nowrap;
            font-weight: 500;
            position: absolute;
            font-size: 16px;
            padding-top: 18px;
            padding-bottom: 18px;
            right: 0;
          }
        }
      }
      &__timer {
        border: 1px solid rgba(255, 255, 255, 0.08);
        background-image: linear-gradient(
            226.76deg,
            rgba(255, 162, 223, 0.08) -4.53%,
            rgba(105, 159, 255, 0.08) 46.5%
          ),
          linear-gradient(
            0deg,
            rgba(119, 126, 139, 0.14),
            rgba(119, 126, 139, 0.14)
          );
        border-radius: 12px;
        min-width: 386px;
        max-width: 386px;
        padding: 24px 0 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 100px;
        position: relative;
        z-index: 4;
        @media screen and (max-width: 500px) {
          //min-width: 365px;
          min-width: 77vw;
        }
        @media screen and (max-width: 425px) {
          margin-bottom: 60px;
          margin-top: 17px;
          padding: 24px 0 60px 0;
        }
        &-buttons {
          margin-top: 20px;
          display: none;
          @media screen and (max-width: 575px) {
            display: block;
          }
          .ui-button {
            &::v-deep {
              padding: 18px 82px;
            }
          }
          .contact-link {
            font-weight: 400;
            font-size: 14px;
            text-decoration-line: underline;
            color: #ffffff;
            opacity: 0.56;
            text-align: center;
            margin-top: 22px;
            @media screen and (max-width: 425px) {
              font-size: 16px;
              margin-top: 32px;
            }
          }
        }
        &-title {
          font-weight: 400;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
          max-width: 280px;
          @media screen and (max-width: 767px) {
            font-size: 15px;
            width: 70vw;
          }
        }
        .timer-starts-in {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 12px;
          text-align: center;
          letter-spacing: 0.04em;
          color: #ff7a82;
          margin-top: 8px;
        }
        .timer {
          &-block {
            margin-top: 16px;
            &__wrapper {
              display: flex;
              align-items: baseline;
            }
            &-item {
              &__value {
                font-weight: 500;
                font-size: 24px;
                letter-spacing: -0.01em;
                text-align: center;
              }
              &__time {
                text-align: center;
                font-weight: 100;
                font-size: 14px;
                letter-spacing: -0.01em;
                color: #ffffff;
                opacity: 0.32;
              }
            }
          }
          &-dot {
            margin: 0 12px;
          }
        }
      }
      &__intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        img {
          margin-bottom: 24px;
        }
      }
      &__title {
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        max-width: 900px;
        width: 61vw;
        margin-bottom: 16px;
        @media screen and (max-width: 1199px) {
          font-size: 20px;
        }
        @media screen and (max-width: 991px) {
          font-size: 18px;
        }
        @media screen and (max-width: 850px) {
          width: 70vw;
        }
        @media screen and (max-width: 767px) {
          font-size: 18px;
          width: 65vw;
        }
        @media screen and (max-width: 425px) {
          font-size: 16px;
          width: 90vw;
        }
      }
      .profit100 {
        position: relative;
        display: inline-block;
        &:after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 8px;
          background-image: url('./static/img/profit-line.png');
          background-repeat: no-repeat;
          background-size: 100%;
        }
      }
    }
    .spline-left {
      position: absolute;
      left: 0;
      top: 40%;
      z-index: 25;
      width: 15vw;
      @media screen and (max-width: 850px) {
        width: 13vw;
        top: 50vh;
      }
      @media screen and (max-width: 767px) {
        //top: 60vh;
        //left: -4vw;
        display: none;
      }
      @media screen and (max-width: 425px) {
        display: none;
      }
    }
    .spline-right {
      position: absolute;
      right: 0;
      top: -6vh;
      z-index: 25;
      width: 19vw;
      @media screen and (max-width: 1199px) {
      }
      @media screen and (max-width: 850px) {
        width: 15vw;
        top: 6vh;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    .ellipse {
      position: absolute;
      left: 50%;
      bottom: -100px;
      transform: translate(-50%, 0);
      @media screen and (max-width: 425px) {
        display: none;
      }
    }
    .ui-btn {
      position: absolute;
      left: 50%;
      z-index: 20;
      bottom: -14px;
      transform: translate(-50%, 0);
      @media screen and (max-width: 425px) {

      }
    }
    &__inner {
      position: relative;
      width: 69vw;
      max-width: 996px;
      border-radius: 12px;
      background-image: url('assets/browser_bg.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      @media screen and (max-width: 1200px) {
        width: 78vw;
      }
      @media screen and (max-width: 850px) {
        width: 83vw;
      }
      @media screen and (max-width: 767px) {
        width: 89vw;
        background-image: url('./static/img/browser_bg-mobile.jpg');
      }
      @media screen and (max-width: 425px) {
        width: 100%;
      }
      .ethereum-logo {
        position: absolute;
        top: 51%;
        left: -35px;
        z-index: 20;
        animation: top-bottom-first 5s infinite;
        transform: rotateY(0) scale(1);
        transition: transform 1s;
        -webkit-transition: .1s;
        -moz-transition: .1s;
        width: 70px;
        &:hover {
          transform: rotateY(1turn) scale(1.5);
        }
        @media screen and (max-width: 500px) {
          width: 70px;
          top: 50%;
          left: -8%;
        }
        @media screen and (max-width: 320px) {
          display: none;
        }
      }
      .bitcoin-logo {
        position: absolute;
        top: 23.5%;
        right: -4%;
        z-index: 20;
        animation: top-bottom-second 5s infinite;
        transition: transform 1s;
        transform: rotateY(0) scale(1);
        width: 70px;
        &:hover {
          transform: rotateY(1turn) scale(1.5);
        }
        @media screen and (max-width: 500px) {
          width: 70px;
          right: -8%;
          top: 40%;
        }
        @media screen and (max-width: 320px) {
          display: none;
        }
      }
    }
  }
}

.ui-input {
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 40px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #565a68;
  padding: 18px 24px;
  width: 100%;
  display: block;
  margin-bottom: 16px;
}

@keyframes top-bottom-second {
  0% {
    top: 23.5%;
  }
  50% {
    top: 51%;
  }
  100% {
    top: 23.5%;
  }
}

@keyframes top-bottom-first {
  0% {
    top: 51%;
  }
  50% {
    top: 23.5%;
  }
  100% {
    top: 51%;
  }
}

  .down-btn {
    .ui-btn {
      &:hover {
        transform: scale(1.05) translate(-50%, 0);
        -webkit-transform: scale(1.05) translate(-50%, 0);
        -moz-transform: scale(1.05) translate(-50%, 0);
      }
    }
  }
</style>
