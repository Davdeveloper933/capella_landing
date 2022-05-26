<template>
  <div class="inner-bg">
    <h3 class="browser-text"> Join Private Round 2</h3>
    <p class="subtitle text-center">Ends in:</p>
    <CountDown :time_left="1654655742000"></CountDown>
    <div class="dashboard">
      <div class="item-row">
        <div class="item">
          <p class="label">
            Token price
          </p>
          <p class="value text-center">
            1 CAPE = 0.01 $
          </p>
        </div>
      </div>
      <div class="item-row">
        <div class="item half">
          <p class="label">
            Min Purchase
          </p>
          <p class="value">
            $1
          </p>
        </div>

        <div style="width: 8px"></div>

        <div class="item half">
          <p class="label">
            Max Purchase
          </p>
          <p class="value">
            $25,000
          </p>
        </div>
      </div>
      <div class="item-row">
        <div class="item">
          <p class="label">
            Private round 2
          </p>
          <p class="value">
            Vesting Shedule: 12,5% on TGE and 7.29% 12 months
          </p>
        </div>
      </div>
      <div class="item-row">
        <div class="item">
          <p style="margin-bottom: 4px">
            <span class="label">Stage 1 = </span><span class="value">10,000,000 CAPE @ 0.01 USDT ($100,000)</span>
          </p>
          <p>
            <span class="label">Stage 2 = </span><span class="value">12,500,000 CAPE @ 0.012 USDT ($150,000)</span>
          </p>
        </div>
      </div>
      <div class="item-row">
        <div class="item half">
          <p class="label">
            Launch Price
          </p>
          <p class="value">
            0.020 USDT
          </p>
        </div>

        <div style="width: 8px"></div>

        <div class="item half">
          <p class="label">
            Launch date
          </p>
          <p class="value">
            Q2-3 2022
          </p>
        </div>
      </div>
      <div class="item-row">
        <div class="item half">
          <p class="label">
            Raised
          </p>
          <p class="value">
            {{ tweened }} USDT
          </p>
        </div>

        <div style="width: 8px"></div>

        <div class="item half">
          <p class="label">
            target
          </p>
          <p class="value">
            250,000 USDT
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from '~/components/CountDown'
export default {
  name: 'Dashboard',
  components: { CountDown},
  props: {
    raised: {
      type:Number,
      default:0
    },
  },
  data() {
    return {
      tweenedRaised: 0,
      email: "",
      isShowError: false,
      showByForm: false
    }
  },
  methods: {
    async send() {
      if (!this.isValid) {
        this.isShowError = true
        await this.$utils.delay(2000)
        this.isShowError = false
      } else {
        this.$emit("toBuy", this.email)
        // await this.$api.send(this.email)
      }
    }
  },
  watch: {
    raised (newValue) {
      this.$gsap.to(this.$data, {duration: 3, tweenedRaised: newValue});
    }
  },
  computed: {
    isValid() {
      return this.email.length > 0 && this.$utils.validateEmailOrTelegram(this.email);
    },
    tweened() {
      return this.tweenedRaised === this.raised ? this.raised : this.tweenedRaised.toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.inner-bg {
  border-radius: 20px;
  padding: 24px 80px 24px 80px;
  background: radial-gradient(12932.03% 512.59% at 52.28% -80.86%, rgba(255, 162, 223, 0.15) 0%, rgba(105, 159, 255, 0.042) 100%), rgba(119, 126, 139, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
  @media (max-width: 991px) {
    padding: 24px;
  }

  h3.browser-text {
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  h4.cta {
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
    margin-top: 22px;
    margin-bottom: 16px;
  }

  p {
    width: 100%;
    margin: 8px 0 0;
    line-height: 14px;
  }

  .subtitle {
    color: #ffffff;
    font-size: 16px;
    line-height: 19.2px;
  }

  .dashboard {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    max-width: 470px;
    width: 100%;

    .item-row {
      display: flex;
      min-height: 48px;
      margin-bottom: 8px;

      .item {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        background-color: #1E2041;
        border-radius: 10px;
        justify-content: space-around;
        padding: 10px 40px;
        @media (max-width: 576px) {
          padding: 10px;
        }

        &.half {
          flex: 1 1 50%;
        }

        p {
          margin: 0;
          display: inline-block;
          line-height: 14px;
          &:last-child {
            .label {
              @media screen and (max-width: 506px) {
                margin-top: 4px;
              }
            }
          }
        }

        .label {
          margin-bottom: 4px;
          text-align: center;
          font-weight: 500;
          font-size: 11px;
          text-transform: uppercase;
          vertical-align: middle;
          color: rgba(255, 255, 255, 0.56);
          @media screen and (max-width: 506px) {
            display: block;
            text-align: center;
          }
        }

        .value {
          text-align: center;
          font-weight: 500;
          font-size: 14px;
          vertical-align: middle;
          color: #ffffff;
          @media screen and (max-width: 506px) {
            display: block;
            text-align: center;
          }
        }
      }
    }


  }

  .form__row {
    display: inline-flex;
    padding: 0;
    max-width: 470px;
    width: 100%;
    position: relative;

    .form__input {
      display: flex;
      height: 48px;
      flex: 1 1 auto;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      margin-right: -20px;
      padding-right: 40px;
      //border: 2px solid #ffffff;
    }

    .form__btn {
      max-width: 165px;
    }

    .tooltip {
      top: 62px;
      color: #ff7a82;
    }
  }


}

</style>
