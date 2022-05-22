<template>
  <div class="section-liquidity section-padding-top">
    <div class="container">
      <div class="section-liquidity__flex-box">
        <div class="section-liquidity__text-wrapper">
          <div class="section-liquidity__title">
            <span class="section-liquidity__subtitle section-title-subtitle">
              Driving liquidity across Dexs
            </span>
            <section-title class="small" :reversed="true">
              Our
              <template #normal-text> Liquidity Pools </template>
            </section-title>
          </div>
          <div class="section-liquidity__img">
            <img src="img/liquidity_img.png" alt="" />
          </div>
          <div class="section-liquidity__info section-padding-bottom">
            <div class="section-liquidity__info-item">
              <h4 class="section-liquidity__info-item__title">
                Our Liquidity Pools
              </h4>
              <p class="section-liquidity__info-item__text">
                With Capella Finance you can maximize your yield, contribute to
                risk management and create unparalleled opportunities to make
                the most of DeFi.
              </p>
            </div>
            <div class="section-liquidity__info-item">
              <h4 class="section-liquidity__info-item__title">
                Get the highest long term yield in DeFi
              </h4>
              <p class="section-liquidity__info-item__text">
                Capella Finance Liquidity provider protocol passes on all
                surplus generated directly to its users, ensuring their best
                interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/ui/ui-section-title.global";
export default {
  name: "LiquiditySection",
  components: { SectionTitle },
};
</script>

<style lang="scss" scoped>
.section-liquidity {
  background-image: url('./static/img/liquidity_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .section-title {
    max-width: 400px;
    @media screen and (max-width: 767px) {
      max-width: 100%;
    }
  }
  &__flex-box {
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 991px) {
    }
  }
  &__img {
    width: 70%;
    position: absolute;
    right: 0;
    top: 0;
    @media screen and (max-width: 1200px) {
      width: 70%;
      top: 20%;
    }
    @media screen and (max-width: 992px) {
      width: 57%;
      bottom: 0;
    }
    @media screen and (max-width: 767px) {
      position: unset;
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 60px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  &__text {
    &-wrapper {
      //width: 56%;
      @media screen and (max-width: 1200px) {
        //width: 40%;
      }
      @media screen and (max-width: 991px) {
        width: 100%;
      }
    }
  }
  &__info {
    margin-top: 64px;
    width: 28vw;
    position: relative;
    z-index: 2;
    /*@media screen and (max-width: 1200px) {*/
    /*width: 25vw;*/
    /*}*/
    @media screen and (max-width: 992px) {
      width: 35vw;
    }
    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: start;
    }
    @media screen and (max-width: 575px) {
      display: block;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    &-item {
      @media screen and (max-width: 767px) {
        width: 40%;
      }
      @media screen and (max-width: 575px) {
        width: 100%;
      }
      &__title {
        font-family: 'Geometria', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: -0.02em;
      }
      &:first-child {
        margin-bottom: 40px;
      }
      &__text {
        margin-top: 16px;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
      }
    }
  }
}
</style>
