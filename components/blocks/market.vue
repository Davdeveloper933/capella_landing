<template>
  <div class="section-market section-padding-top section-padding-bottom">
    <div class="container">
      <div class="section-market__flex-wrap">
        <div class="section-market__text-wrapper">
          <div class="section-market__title">
            <span class="section-market__subtitle section-title-subtitle">
              Dont have the time to chase
            </span>
            <section-title class="small">
              the market for better APYs? <br />
              <template #stroked-text> we got you! </template>
            </section-title>
            <div class="section-market__question">
              <div class="gradient-line"></div>
              <h3 class="section-market__question-text">
                Don’t have hours and hours to find and learn about new DeFi
                projects and services? We maintain and optimize your position
                24/7
              </h3>
            </div>
          </div>
        </div>
        <div class="section-market__cards">
          <div class="section-market__cards-wrapper">
            <div
              v-for="(card, indx) in cards"
              :key="indx"
              class="section-market__card-item"
            >
              <div class="section-market__card-item__img">
                <img :src="`img/cards/${card.img}.png`" alt="" />
              </div>
              <h3 class="section-market__card-item__title">
                {{ card.title }}
              </h3>
              <p class="section-market__card-item__desc">
                {{ card.desc }}
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
  name: "TheMarketSection",
  components: { SectionTitle },
  data() {
    return {
      cards: [
        {
          title: "24/7 Monitoring",
          desc: "Capella Finance is taking care of your positions for you 24/7, making sure they are always at optimum",
          img: "monitoring",
        },
        {
          title: "100% trustless",
          desc: "We ensure that the system is 100% trustless and only you’ve got access to your funds.",
          img: "trustless",
        },
        {
          title: "Multichain",
          desc: "Smart contract account owned by the users to manage & optimize funds across any number of protocols",
          img: "multichain",
        },
        {
          title: "DeFi Smart Vaults",
          desc: "Managing your liquidity intelligently by quantitative strategies",
          img: "smart",
        },
        {
          title: "Affiliate Program",
          desc: "Earn up to 50% commissions when your audience invest in our Liquidity Pools",
          img: "affiliate",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-market {
  background-image: radial-gradient(
      132.75% 132.47% at 27.01% -50.38%,
      rgba(0, 144, 249, 0.4) 0%,
      rgba(15, 15, 55, 0.4) 100%
    ),
    radial-gradient(40% 83% at 57% -36%, #e5517d, transparent),
    url('assets/market_bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  background-color: rgba(15, 15, 55, 1);
  z-index: 2;
  @media screen and (max-width: 992px) {
    background-image: radial-gradient(
        132.75% 132.47% at 27.01% -50.38%,
        rgba(0, 144, 249, 0.4) 0%,
        rgba(15, 15, 55, 0.4) 100%
      ),
      radial-gradient(40% 83% at 57% -36%, #e5517d, transparent);
  }
  @media screen and (max-width: 425px) {
    border-radius: 24px;
  }
  &__flex-wrap {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }
  &__text-wrapper {
    width: 95vw;
    margin-right: 60px;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
  &__title {
    .section-title.small {
      max-width: 510px;
    }
  }
  .gradient-line {
    margin-top: 32px;
    margin-bottom: 24px;
  }
  &__question {
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
  &__cards {
    &-wrapper {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 1rem;
      @media screen and (max-width: 992px) {
        margin-top: 40px;
      }
      @media screen and (max-width: 575px) {
        grid-template-columns: 3fr 3fr;
      }
      @media screen and (max-width: 425px) {
        grid-template-columns: auto;
      }
    }
  }
  &__card-item {
    background: linear-gradient(
      270deg,
      rgba(255, 162, 223, 0.14) -4.07%,
      rgba(105, 159, 255, 0.14) 47.91%
    );
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 40px;
    cursor: pointer;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    &:hover {
      transform: scale(1.02);
      -webkit-transform: scale(1.02);
      -moz-transform: scale(1.02);
    }
    &:hover:after {
      opacity: 1;
    }
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(226.76deg, rgba(255, 162, 223, 0.18) -4.53%, rgba(105, 159, 255, 0.18) 46.5%);
      transition: opacity 0.3s ease-out;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      opacity: 0;
      z-index: -1;
    }
    @media screen and (max-width: 1240px) {
      padding: 30px;
    }
    @media screen and (max-width: 575px) {
      padding: 20px;
    }
    &:first-child {
      grid-column-start: 2;
      @media screen and (max-width: 992px) {
        grid-column-start: 1;
      }
    }
    &__title {
      margin: 24px 0 16px 0;
      font-family: 'Geometria', sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      letter-spacing: -0.02em;
    }
    &__img {
    }
    &__desc {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }
  }
}
</style>
