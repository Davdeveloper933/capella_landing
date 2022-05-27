<template>
  <div
    class="section-top-blockchains section-padding-top section-padding-bottom"
  >
    <div class="section-top-blockchains__absolute-img">
      <img src="img/splines.png" alt="" />
    </div>
    <div class="container">
      <div class="section-top-blockchains__title">
        <span class="section-top-blockchains__subtitle section-title-subtitle">
          All vaults autocompound at an optimal rate and
        </span>
        <section-title class="small">
          diversified Across
          <template #stroked-text> top blockchains </template>
        </section-title>
      </div>
      <div class="section-top-blockchains__cards">
        <div
          v-for="(card, indx) in cards"
          :key="indx"
          class="section-top-blockchains__cards-item"
        >
          <div class="section-top-blockchains__cards-item__title">
            <section-title class="small">
              {{ card.title }}
              <template #stroked-text> pool </template>
            </section-title>
          </div>
          <h4 class="section-top-blockchains__cards-item__subtitle">
            {{ card.subtitle }}
          </h4>
          <div class="section-top-blockchains__cards-item__tokens">
            <div v-for="(token, token_indx) in card.tokens" :key="token_indx">
              <div class="section-top-blockchains__cards-item__tokens-item">
                <span
                  class="section-top-blockchains__cards-item__tokens-item__text"
                >
                  {{ token.name }}
                </span>
                <img
                  class="section-top-blockchains__cards-item__tokens-item__img"
                  :src="`img/tokens/${token.img}`"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="section-top-blockchains__cards-item__bottom">
            <div
              v-for="(item, item_indx) in card.bottomItems"
              :key="item_indx"
              class="section-top-blockchains__cards-item__bottom-item"
            >
              <h4
                class="section-top-blockchains__cards-item__bottom-item__text"
              >
                {{ item.text }}
              </h4>
              <div
                class="section-top-blockchains__cards-item__bottom-item__value"
                :class="item.color"
              >
                <span>{{ item.value }}</span>
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
  name: "TopBlockchainsSection",
  components: { SectionTitle },
  data() {
    return {
      cards: [
        {
          title: "stable",
          subtitle: "Tokens that are included",
          tokens: [
            {
              name: "usdt",
              img: "tether.svg",
            },
            {
              name: "usdc",
              img: "usdt-blue.png",
            },
            {
              name: "busd",
              img: "usdt-yellow.png",
            },
          ],
          bottomItems: [
            {
              text: "Pool Deposits",
              value: "$ 19,532,483,985",
              color: "blue",
            },
            {
              text: "Earning rate",
              value: "35%",
              color: "green",
            },
          ],
        },
        {
          title: "Coin",
          subtitle: "Tokens that are included",
          tokens: [
            {
              name: "eth",
              img: "ethereum.svg",
            },
            {
              name: "btc",
              img: "bitcoin.svg",
            },
            {
              name: "usdt",
              img: "tether.svg",
            },
          ],
          bottomItems: [
            {
              text: "Pool Deposits",
              value: "$13,356,742,138",
              color: "blue",
            },
            {
              text: "Earning rate",
              value: "55%",
              color: "yellow",
            },
          ],
        },
        {
          title: "DEX",
          subtitle: "Tokens that are included",
          tokens: [
            {
              name: "eth",
              img: "ethereum.svg",
            },
            {
              name: "bnb",
              img: "bnb.png",
            },
            {
              name: "avax",
              img: "avax.png",
            },
            {
              name: "ftm",
              img: "ftm.png",
            },
            {
              name: "sol",
              img: "usdt-dark.png",
            },
            {
              name: "matic",
              img: "matic.png",
            },
          ],
          bottomItems: [
            {
              text: "Pool Deposits",
              value: "$55,222,797,888",
              color: "blue",
            },
            {
              text: "Earning rate",
              value: "80%",
              color: "purple",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-top-blockchains {
  background-image: radial-gradient(
        134.35% 134.32% at 19.1% -52.22%,
        rgba(0, 144, 249, 0.429) 0%,
        rgba(15, 15, 55, 0.55) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    rgba(17, 18, 26, 0.56);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  position: relative;
  margin-top: -20px;
  background-color: rgba(15, 15, 55, 1);
  z-index: 2;
  &__absolute-img {
    position: absolute;
    right: 0;
    top: -32%;
    width: 25vw;
    animation: spline 2s ease-in-out infinite;
    &::after {
      content: '';
      position: absolute;
      animation: neon 2s ease-in-out infinite
    }
    @media screen and (max-width: 1240px) {
      top: -15%;
    }
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  &__title {
    .section-title {
      max-width: 55vw;
      @media screen and (max-width: 1200px) {
        max-width: 60vw;
      }
      @media screen and (max-width: 992px) {
        max-width: 100%;
      }
    }
  }
  &__cards {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 3.5fr));
    grid-gap: 20px;
    @media screen and (max-width: 992px) {
      grid-template-columns: 3fr 3fr;
    }
    @media screen and (max-width: 575px) {
      grid-template-columns: 100%;
    }
    &-item {
      background: linear-gradient(
        270deg,
        rgba(255, 162, 223, 0.08) -4.07%,
        rgba(105, 159, 255, 0.08) 47.91%
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
      @media screen and (max-width: 1200px) {
        padding: 30px;
      }
      &__title {
        margin-bottom: 24px;
        .section-title {
          font-weight: 700;
          font-size: 32px;
        }
      }
      &__subtitle {
        margin-bottom: 15px;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }
      &__tokens {
        display: grid;
        //grid-template-columns: max-content max-content max-content max-content;
        //grid-template-columns: 73px 73px 73px 73px;
        grid-template-columns: repeat(auto-fill, 73px);
        grid-row-gap: 12px;
        grid-column-gap: 8px;
        grid-template-rows: 50fr 50fr;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        padding-bottom: 24px;
        @media screen and (max-width: 632px) {
          grid-template-rows: unset;
        }
        @media screen and (max-width: 575px) {
          grid-template-columns: repeat(auto-fill, 73px);
        }
        &-item {
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          &__text {
            margin-right: 4px;
            margin-top: auto;
            font-weight: 500;
            font-size: 12px;
            text-transform: uppercase;
          }
          &__img {
            width: 14px;
            height: 14px;
            max-width: 14px;
          }
        }
      }
      &__bottom {
        margin-top: 24px;
        display: flex;
        @media screen and (max-width: 1200px) {
          //margin-bottom: 24px;
          //flex-direction: column;
        }
        @media screen and (max-width: 632px) {
          flex-direction: row;
        }
        &-item {
          &:first-child {
            margin-right: 16px;
            @media screen and (max-width: 1200px) {
              margin-bottom: 24px;
            }
            @media screen and (max-width: 992px) {
              margin-right: 16px;
            }
            @media screen and (max-width: 632px) {
              margin-bottom: 0;
            }
          }
          &__text {
            font-weight: 500;
            font-size: 12px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            margin-bottom: 12px;
            @media screen and (max-width: 632px) {
              font-size: 10px;
            }
          }
          &__value {
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            display: inline-block;
            padding: 9px 12px 8px 12px;
            @media screen and (max-width: 632px) {
              font-size: 14px;
            }
            &.blue {
              background: #4276f6;
            }
            &.green {
              background: #6cac89;
            }
            &.yellow {
              background: #e1861b;
            }
            &.purple {
              background: #e17b99;
            }
          }
        }
      }
    }
  }
}
</style>
