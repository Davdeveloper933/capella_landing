<template>
  <div class="section-holders section-padding-top">
    <div class="section-holders__absolute-img">
      <img class="sphere" src="img/ellipse-img.png" alt="" />
    </div>
    <div class="container">
      <div class="section-holders__flex-box">
        <div class="section-holders__text-wrapper">
          <div class="section-holders__title">
            <span class="section-holders__subtitle section-title-subtitle">
              Driving liquidity across Dexs
            </span>
            <section-title class="small">
              best-in-class yields <br />
              <template #stroked-text> for our holders </template>
            </section-title>
          </div>
          <div class="section-holders__img">
            <img src="img/yields_img.png" alt="" />
          </div>
          <div class="section-holders__question">
            <div class="gradient-line"></div>
            <div class="section-holders__question-text">
               <h2>Rewards</h2><br>

              Capella shares 100% of the protocol’s total revenue with $CAPE holders, who receive their daily dividends by staking $CAPE on the platform. The more liquidity is provided on Capella the more dividends is being earned by $CAPE stakers
            </div>
          </div>
          <div class="section-holders__info section-padding-bottom">
            <div class="section-holders__info-item">
              <div class="section-holders__info-item__img">
                <img src="img/holders_1.png" alt="" />
              </div>
              <div class="section-holders__info-item__text">
                 <h2>DAO Governance</h2><br>

                20% of supplly is reserved for Capella DAO, which is staked forever. $CAPE holders vote on the best use of the DAO treasury amongst other strategic proposals
              </div>
            </div>
            <div class="section-holders__info-item">
              <div class="section-holders__info-item__img">
                <img src="img/holders_2.png" alt="" />
              </div>
              <p class="section-holders__info-item__text">
                 <h2>Buyback & burn</h2><br>

                Every quarter Capella will spend 5% of its revenue to buy back & burn $CAPE from the market until 50% of the total supply is burned
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
  name: "HoldersSection",
  components: { SectionTitle },
};
</script>

<style lang="scss" scoped>
.section-holders {
  position: relative;
  //background: radial-gradient(40px 40px at 40px 40px, rgba(207,141,224,0.78) 0%, rgba(0,0,0,1) 55%);
  background-image: linear-gradient(
      0deg,
      rgba(17, 18, 26, 0.56),
      rgba(17, 18, 26, 0.56)
    ),
    radial-gradient(
      35.38% 92.38% at 68.4% 98.28%,
      #a36db6 0%,
      rgba(15, 15, 55, 0.46) 100%
    );
  background-size: cover;
  background-color: rgba(17, 18, 26, 1);
  border-radius: 16px;
  z-index: 1;
  @media screen and (max-width: 767px) {
    background: linear-gradient(
        0deg,
        rgba(17, 18, 26, 0.56),
        rgba(17, 18, 26, 0.56)
      ),
      radial-gradient(
        230.38% 55.38% at 9.4% 50.28%,
        #d16497 0%,
        rgba(15, 15, 55, 0.46) 100%
      );
  }
  &__line {
    position: absolute;
    background-image: linear-gradient(
      to right,
      rgba(255, 136, 214, 1),
      rgba(128, 85, 251, 0.7106),
      rgba(99, 138, 189, 0.82)
    );
  }
  &__absolute-img {
    position: absolute;
    top: -5%;
    right: 0;
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  .section-title {
    max-width: unset;
    @media screen and (max-width: 992px) {
      max-width: 100%;
    }
  }
  &__flex-box {
    position: relative;
    overflow: hidden;
    //display: flex;
    //align-items: flex-end;
    @media screen and (max-width: 991px) {
      //flex-direction: column;
      //align-items: normal;
    }
  }
  &__img {
    width: 70%;
    position: absolute;
    right: 0;
    @media screen and (max-width: 1200px) {
      width: 70%;
    }
    @media screen and (max-width: 992px) {
      width: 70%;
      bottom: 0;
    }
    @media screen and (max-width: 767px) {
      position: unset;
      display: flex;
      justify-content: center;
      width: 70%;
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
  .gradient-line {
    margin-top: 32px;
    margin-bottom: 24px;
  }
  &__question {
    width: 40vw;
    position: relative;
    z-index: 3;
    @media screen and (max-width: 991px) {
      width: 60vw;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    &-text {
      font-weight: 400;
      font-size: 22px;
      line-height: 160%;
      line-break: auto;
      @media screen and (max-width: 1286px) {
        font-size: 20px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
      @media screen and (max-width: 375px) {
        font-size: 16px;
      }
    }
  }
  &__info {
    margin-top: 64px;
    width: 30vw;
    position: relative;
    z-index: 3;
    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: start;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    @media screen and (max-width: 575px) {
      display: block;
    }
    &-item {
      @media screen and (max-width: 767px) {
        width: 40%;
      }
      @media screen and (max-width: 575px) {
        width: 100%;
      }
      &:first-child {
        margin-bottom: 40px;
      }
      &__text {
        margin-top: 16px;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
      }
    }
  }
}
</style>
