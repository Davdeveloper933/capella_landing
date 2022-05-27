<template>
  <div id="ecosystem" class="section-ecosystem section-padding-bottom section-padding-top">
    <div class="section-ecosystem__absolute-img">
      <img src="img/ecosystem/dark-img.png" alt="">
      <img class="sphere" src="img/ecosystem/ecosystem-sphere.png" alt="">
    </div>
    <div class="container">
      <div class="section-ecosystem__top-block">
        <div class="section-ecosystem__top-block__title">
          <span class="section-ecosystem__subtitle section-title-subtitle">
            A growing
          </span>
          <section-title class="small" :reversed="true">
            CAPELLA
            <template #normal-text> Finance ecosystem </template>
          </section-title>
        </div>
        <div class="section-ecosystem__top-block__question">
          <div class="gradient-line"></div>
          <h3 class="section-ecosystem__top-block__question__text">Did you ever ask yourself,where should i put my funds today to get the best returns?
          </h3>
        </div>
      </div>
      <div class="section-ecosystem__cards">
        <div class="section-ecosystem__cards-wrapper">
          <div class="section-ecosystem__cards-item"
               v-for="(card,indx) in cards"
               :key="indx"
          >
            <div class="section-ecosystem__cards-item__top">
              <img :src="`img/ecosystem/${card.img}.png`" alt="">
              <h3 class="section-ecosystem__cards-item__top-text">
                {{ card.title }}
              </h3>
            </div>
            <div class="section-ecosystem__cards-item__bottom">
              <p class="section-ecosystem__cards-item__bottom-text">
                {{ card.text }}
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
  name: "SectionEcosystem",
  components: { SectionTitle },
  data() {
    return {
      cards: [
        {
          title:"Curve",
          text: "Creating deep on-chain liquidity using advanced bonding curves",
          img: "curve"
        },
        {
          title:"Uniswap",
          text: "Protocol for trading and automated liquidity provision on Ethereum. ",
          img: "uniswap"
        },
        {
          title:"Balance",
          text: "Leading platform for programmable liquidity. ",
          img: "balance"
        },
        {
          title:"Sushiswap",
          text: "Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. ",
          img: "sushiswap"
        },
        {
          title:"Yearn Finance",
          text: "Ethereum Yield Optimizer",
          img: "yearn"
        },
        {
          title:"Beefy Finance",
          text: "The Multichain Yield Optimizer",
          img: "beefe"
        },
        {
          title:"Autofarm",
          text: "AutoFarm is a yield farming aggregator running on 15 different EVM-compatible networks.",
          img: "autofarm"
        },
        {
          title:"Abracadabra Money",
          text: "Can provide collateral in the form of various interest bearing crypto assets such as yvYFI, yvUSDT, yvUSDC, xSUSHI and more.",
          img: "abracadabra"
        },
        {
          title:"Aragon",
          text: "Build your Decentralized Autonomous Organization on open-source infrastructure with governance plugins.",
          img: "aragon"
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.section-ecosystem {
  background-image: url("assets/ecosystem_bg.jpg");
  background-size: cover;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  position: relative;
  margin-top: -20px;
  z-index: 2;
  &__absolute-img {
    position: absolute;
    top: 0;
    right: 3%;
    img:first-child {
      animation: spline 2s ease-in-out infinite;
      &::after {
        content: '';
        position: absolute;
        animation: neon 2s ease-in-out infinite
      }
    }
    @media screen and (max-width: 1240px) {
      width: 29vw;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
    .sphere {
      position: absolute;
      left: 40%;
      top: -18%;
      transform: translate(-50%, 0);
      @media screen and (max-width: 1240px) {
        width: 6vw;
      }
    }
  }
  &__top-block {
    display: flex;
    position: relative;
    margin-bottom: 40px;
    @media screen and (max-width: 992px) {
      flex-wrap: wrap;
    }
    &__title {
      width: 31vw;
      @media screen and (max-width: 992px) {
        width: 100%;
        margin-bottom: 28px;
      }
      .section-title {
        max-width: 260px;
        @media screen and (max-width: 992px) {
          max-width: 100%;
        }
      }
    }
    &__question {
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      @media screen and (max-width: 992px) {
        width: 73%;
        margin-left: 0;
      }
      @media screen and (max-width: 575px) {
        width: 100%;
      }
      &__text {
        font-weight: 100;
        font-size: 22px;
        line-height: 160%;
        padding-top: 24px;
        width: 31vw;
        line-break: auto;
        @media screen and (max-width: 1286px) {
          font-size: 20px;
        }
        @media screen and (max-width: 992px) {
          width: 100%;
        }
        @media screen and (max-width: 767px) {
          font-size: 18px;
        }
        @media screen and (max-width: 375px) {
          font-size: 16px;
          padding-top: 16px;
        }
      }
    }
  }
  &__cards {
    &-wrapper {
      display: grid;
      grid-template-columns: auto auto auto;
      row-gap: 20px;
      column-gap: 20px;
      @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto auto;
      }
      @media screen and (max-width: 1150px) {
        grid-template-columns: auto auto;
      }
      @media screen and (max-width: 575px) {
        grid-template-columns: auto;
      }
    }
    &-item {
      background: linear-gradient(226.76deg, rgba(255, 162, 223, 0.08) -4.53%, rgba(105, 159, 255, 0.08) 46.5%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 32px;
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
      &__top {
        display: flex;
        align-items: center;
        @media screen and (max-width: 1200px) {
          flex-wrap: wrap;
        }
        @media screen and (max-width: 575px) {
          flex-wrap: nowrap;
        }
        &-text {
          font-family: 'Geometria',sans-serif;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: -0.02em;
        }
        img {
          margin-right: 16px;
        }
      }
      &__bottom {
        &-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          margin-top: 16px;
        }
      }
    }
  }
}
</style>
