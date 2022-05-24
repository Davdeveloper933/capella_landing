<template>
  <div class="inner-bg">
    <div class="runner-wrap">
      <div class="runner">
        <div class="runner-progress" :style="{width: fPercent+'%'}"></div>
      </div>
      <div class="footer-row">
        <div class="col-1 label">
          $ {{fRaised}}
        </div>
        <div class="col-2 label">
          {{fTokens}}/22,500,000
        </div>
      </div>

    </div>
  </div>
</template>
<script>

// const PER_USDT = 0.006
export default {
  name: 'Runner',
  props: {
    raised: {
      type: Number,
      default: 0
    },
    tokens: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      tweenedRaised: 0,
      tweenedPercent: 0,
      tweenedTokens: 0,
    }
  },
  watch:{
    raised(value){
      this.$gsap.to(this.$data, {duration: 1, tweenedRaised: value});
    },
    percent(value){
      this.$gsap.to(this.$data, {duration: 1, tweenedPercent: value});
    },
    tokens(value){
      this.$gsap.to(this.$data, {duration: 1, tweenedTokens: value});
    }
  },
  computed: {
    closes() {
      return this.$moment.utc(1649355742000).diff(this.$moment.utc(), 'days')
    },
    percent(){
      return (this.tokens/40000000)*100
    },
    fRaised(){
      return this.tweenedRaised.toFixed(2)
    },
    fPercent(){
      return this.tweenedPercent.toFixed(2)
    },
    fTokens(){
      return this.tweenedTokens.toFixed(2)
    },
  },

  mounted() {
    this.$gsap.to(this.$data, {duration: 1, tweenedRaised: this.raised});
    this.$gsap.to(this.$data, {duration: 1, tweenedPercent: this.percent});
    this.$gsap.to(this.$data, {duration: 1, tweenedTokens: this.tokens});
  }
}
</script>

<style lang="scss" scoped>
.inner-bg {
  border-radius: 20px;
  padding: 24px 80px 24px 80px;
  background: radial-gradient(12932.03% 512.59% at 52.28% -80.86%, rgba(255, 162, 223, 0.15) 0%, rgba(105, 159, 255, 0.042) 100%), rgba(119, 126, 139, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 24px;
  width: 100%;

  @media (max-width: 991px) {
    padding: 24px;
  }

  @media screen and (max-width: 576px) {
  }

  .runner-wrap {
    width: 420px;
    @media (max-width: 991px) {
      width: 100%;
    }
    .value{
      font-weight: 500;
      font-size: 14px;
    }

    .runner{
      width: -webkit-fill-available;
      margin-top: 16px;
      margin-bottom: 10px;
      background-color: #171938;
      height: 6px;
      border-radius: 3px;

      .runner-progress{
        background: linear-gradient(270deg, #FF4567 -4.07%, #306FE0 47.91%);
        border-radius: 3px;
        height: 100%;
      }
    }

    .label{
      font-weight: 400;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.56);
    }

    .header-row, .footer-row {
      flex: 1 1 100%;
      display: flex;
      flex-direction: row;
    }

    .footer-row {

    }

    .col-1, .col-2 {
      display: flex;
      flex: 1 1 50%;

    }

    .col-1{
      justify-content: start;
    }

    .col-2{
      justify-content: end;
    }
  }
}

</style>
