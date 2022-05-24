<template>
    <div id="networks" class="section-networks section-padding-top section-padding-bottom">
      <div class="container">
        <div class="section-networks__top-block">
          <div class="section-networks__top-block__title">
            <section-title class="small" :reversed="true">
              supported
              <template #normal-text> networks </template>
            </section-title>
          </div>
          <div class="section-networks__top-block__question">
            <div class="gradient-line"></div>
            <h3 class="section-networks__top-block__question__text">Сapella Finance supports the following chains</h3>
          </div>
        </div>
        <div class="section-networks__cards">
          <div class="section-networks__cards-wrapper">
            <div class="section-networks__cards-item"
                 v-for="(network,indx) in networks"
                 :key="indx"
                 :class="{'set-transition': !network.comingSoon}"
            >
              <div class="section-networks__cards-item__coming-soon" v-if="network.comingSoon">
                <div class="section-networks__cards-item__coming-soon blur"></div>
                <div class="section-networks__cards-item__coming-soon-content">
                  <img src="img/networks/lock.png" alt="">
                  <p class="section-networks__cards-item__coming-soon-content-text">
                    Coming soon
                  </p>
                </div>
              </div>
              <div class="section-networks__cards-item__top">
                <div class="section-networks__cards-item__top-img">
                  <img :src="`img/networks/${network.img}.png`" alt="">
                </div>
                <a :href="`https://www.${network.link}`" class="section-networks__cards-item__top-link">
                  {{ network.name }}
                </a>
              </div>
              <div class="section-networks__cards-item__bottom">
                <h3 class="section-networks__cards-item__bottom-left">
                  {{ network.name }}
                </h3>
                <div class="section-networks__cards-item__bottom-right">
                  {{ network.crypto }}
                </div>
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
        name: "sectionNetworks",
      components: {SectionTitle},
      data() {
          return {
            networks: [
              {
                img:"eth-logo",
                link:"ethereum.org/en",
                name:"Ethereum",
                crypto: "eth",
                comingSoon: false
              },
              {
                img:"binance-logo",
                link:"bnbchain.world",
                name:"Binance Smart Chain",
                crypto: "eth",
                comingSoon: false
              },
              {
                img:"polygon-logo",
                link:"polygon.technology",
                name:"Polygon",
                crypto: "fan",
                comingSoon: false
              },
              {
                img:"fantom-logo",
                link:"fantom.foundation",
                name:"Fantom",
                crypto: "fan",
                comingSoon: false
              },
              {
                img:"solana-logo",
                link:"Ethereum.org",
                name:"Solana",
                crypto: "fan",
                comingSoon: true
              },
              {
                img:"avalance-logo",
                link:"Ethereum.org",
                name:"Avalance",
                crypto: "eth",
                comingSoon: true
              },
              {
                img:"waves-logo",
                link:"Ethereum.org",
                name:"Waves",
                crypto: "eth",
                comingSoon: true
              },
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>
  .set-transition {
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
  }
  .section-networks {
    background-image: radial-gradient(83.55% 202.69% at 96.15% -92.24%, rgba(40, 45, 173, 0.0825) 0%, rgba(20, 15, 55, 0.374) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    position: relative;
    margin-top: -20px;
    background-color: rgba(20, 15, 55, 1);
    &__top-block {
      display: flex;
      position: relative;
      margin-bottom: 40px;
      align-items: center;
      @media screen and (max-width: 992px) {
        flex-wrap: wrap;
      }
      &__title {
        width: 36vw;
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
          width: 82%;
          margin-left: 0;
        }
        @media screen and (max-width: 767px) {
          width: 65%;
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
      margin-bottom: 40px;
      &-wrapper {
        display: grid;
        grid-template-columns: repeat(4,24%);
        row-gap: 20px;
        column-gap: 20px;
        @media screen and (max-width: 1359px) {
          grid-template-columns: repeat(4,24%);
        }
        @media screen and (max-width: 1200px) {
          grid-template-columns: repeat(3,33%);
        }
        @media screen and (max-width: 992px) {
          grid-template-columns: repeat(2,auto);
        }
        @media screen and (max-width: 575px) {
          grid-template-columns: 100%;
        }
      }
      &-item {
        background: linear-gradient(226.76deg, rgba(255, 162, 223, 0.14) -4.53%, rgba(105, 159, 255, 0.14) 46.5%);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 16px;
        position: relative;
        cursor: pointer;
        &__top-img {
          background: rgba(208, 225, 255, 0.08);
          border-radius: 8px;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
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
        &__coming-soon {
          background: linear-gradient(226.76deg, rgba(255, 162, 223, 0.14) -4.53%, rgba(105, 159, 255, 0.14) 46.5%);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border-radius: 8px;
          &.blur {
            backdrop-filter: blur(8px);
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 8px;
          }

          &-content {
            text-align: center;
            position: relative;
            &-text {
              font-family: 'Geometria',sans-serif;
              font-weight: 700;
              font-size: 14px;
              text-align: center;
              letter-spacing: -0.02em;
            }
          }
        }
        &__top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
          &-link {
            font-weight: 400;
            font-size: 14px;
            text-align: right;
            text-decoration-line: underline;
            color: #A6B1C4;
          }
        }
        &__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-left {
            font-family: 'Geometria',sans-serif;
            font-weight: 700;
            font-size: 16px;
            letter-spacing: -0.02em;
          }
          &-right {
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 5px 12px;
            display: inline-block;
            text-align: center;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 12px;
          }
        }
      }
    }
  }

  .neon-img {
    position: absolute;
    left: 50%;
    bottom: -45px;
    transform: translate(-50%,0);
    @media screen and (max-width: 413px) {
      bottom: -44px;
    }
  }
</style>
