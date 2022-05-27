<template>
  <div id="roadmap" class="section-roadmap section-padding-bottom section-padding-top">
    <div class="container">
      <div class="section-roadmap__top-block">
        <div class="section-roadmap__top-block__title">
          <section-title class="small" :reversed="true">
            road<template #normal-text>map</template>
          </section-title>
        </div>
        <div class="section-roadmap__top-block__question">
          <div class="gradient-line"></div>
          <h3 class="section-roadmap__top-block__question__text">
            Did you ever ask yourself, where should i put my funds today to get
            the best returns?
          </h3>
        </div>
        <div class="section-roadmap__top-block__swipe-right">
          <span class="section-roadmap__top-block__swipe-right__text"
            >swipe right</span
          >
          <ui-btn>
            <img src="svg/down.svg" alt="" />
          </ui-btn>
        </div>
      </div>
      <div class="section-roadmap__slider">
        <div class="section-roadmap__slider-wrapper swiper">
          <div class="swiper-wrapper">
            <div
              v-for="(item, indx) in sliderItems"
              :key="indx"
              class="swiper-slide"
              :class="`slide--${indx}`"
            >
              <div class="section-roadmap__slider-item slider-content">
                <div class="section-roadmap__slider-item__top">
                  <div class="section-roadmap__slider-item__top-quarter">
                    <div
                      class="section-roadmap__slider-item__top-quarter__number stroked"
                    >
                      <h3>{{ item.q }}</h3>
                      <span>{{ item.numb }}</span>
                    </div>
                    <h3 class="section-roadmap__slider-item__top-quarter__text">
                      {{ item.title }}
                    </h3>
                  </div>
                  <button
                    class="section-roadmap__slider-item__button"
                    :class="item.button"
                  >
                    <span v-if="item.button === 'ready'">Ready</span>
                    <span v-if="item.button === 'progress'">In progress</span>
                    <span v-if="item.button === 'future'">Future</span>
                  </button>
                </div>
                <div class="section-roadmap__slider-item__bottom">
                  <div class="section-roadmap__slider-item__bottom-list">
                    <div
                      v-for="(point, index) in item.points"
                      :key="index"
                      class="section-roadmap__slider-item__bottom-list-item"
                    >
                      <div
                        class="section-roadmap__slider-item__bottom-list-item__img"
                      >
                        <img v-if="item.checked" src="img/check.png" alt="" />
                        <img v-else src="img/uncheck.png" alt="" />
                      </div>
                      <p
                        class="section-roadmap__slider-item__bottom-list-item__text"
                      >
                        {{ point }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <picture>
      <source media="(max-width:575px)" srcset="img/statusbar-mobile.png" />
      <img src="img/statusbar.png" class="statusbar-img" alt="" />
    </picture>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import SectionTitle from "../ui/ui-section-title.global";
import UiBtn from "../ui/ui-btn.global";
export default {
  name: "SectionRoadMap",
  components: { UiBtn, SectionTitle },
  data() {
    return {
      sliderItems: [
        {
          q: "q",
          numb: "1",
          title: "1st quarter 2022",
          button: "ready",
          points: [
            "Seed Round",
            "Capella Finance Launch",
            "Capella Finance V1 : Multi-Strategy Vaults",
            "Private Round 1",
          ],
          checked: true
        },
        {
          q: "q",
          numb: "2",
          title: "2nd quarter 2022",
          button: "progress",
          points: [
            "Capella Finance dApp Launch (beta)",
            "Audit",
            "Private Round 2 & IDO on Launchpad",
            "$CAPE listing",
          ],
          checked: false
        },
        {
          q: "q",
          numb: "3",
          title: "3rd quarter 2022",
          button: "future",
          points: [
            "Transition product into a truly DEFI platform with $CAPE as Governance token",
            "P2P Payment System Integration",
            "Launch innovative financial services support such as lending/borrowing and collateralisation",
            "Leverage liquidity mining across many DeFi protocols",
          ],
          checked: false
        },
        {
          q: "q",
          numb: "4",
          title: "4th quarter 2022",
          button: "future",
          points: [
            "Build an on-chain perpetual futures DEX with deep liquidity and builder-ready composability",
            "Card Issuing - Virtual or Physical custom branded physical Card with digital payment and NFC support. All covered with a few lines of code. ",
            "Prepare open platform to provide API and Whitelist services for third-party strategy providers.",
            "Phasing into an open platform, starts to collaborate with large financial instituitions and offers more comprehensive structural financial products.",
          ],
          checked: false
        },
      ],
    };
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    this.swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: ".section-roadmap__top-block__swipe-right",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        460: {
          slidesPerView: 1.1,
        },
        575: {
          slidesPerView: 1.1,
        },
        640: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2.1,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3.2,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.section-roadmap {
  position: relative;
  background-image: radial-gradient(
    144.34% 505.62% at -64.89% 180.52%,
    rgba(40, 45, 173, 0.154) 0%,
    rgba(15, 15, 55, 0.55) 100%
  );
  margin-top: -20px;
  background-color: rgba(15, 15, 55, 1);
  &__top-block {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    @media screen and (max-width: 992px) {
      flex-wrap: wrap;
    }
    &__title {
      width: 25vw;
      @media screen and (max-width: 992px) {
        width: 100%;
        margin-bottom: 28px;
      }
      .section-title {
        max-width: 260px;
        @media screen and (max-width: 992px) {
          max-width: 100%;
          display: flex;
          flex-wrap: wrap;
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
      &__text {
        font-weight: 100;
        font-size: 22px;
        line-height: 160%;
        padding-top: 24px;
        width: 40vw;
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
    &__swipe-right {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      right: 100px;
      @media screen and (max-width: 992px) {
        top: 50%;
        transform: translate(0, -50%);
        bottom: unset;
      }
      @media screen and (max-width: 1200px) {
        right: 0px;
      }
      &__text {
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        margin-right: 8px;
        @media screen and (max-width: 575px) {
          display: none;
        }
      }
    }
  }
  &__slider {
    &-wrapper {
    }
    &-item {
      background: linear-gradient(
        226.76deg,
        rgba(255, 162, 223, 0.08) -4.53%,
        rgba(105, 159, 255, 0.08) 46.5%
      );
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 30px;
      width: 100%;
      cursor: pointer;
      transition: 0.3s;
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
      &:hover {
        transform: scale(1.03);
        -webkit-transform: scale(1.03);
        -moz-transform: scale(1.03);
      }
      &:hover {
        background: linear-gradient(
          226.76deg,
          rgba(255, 162, 223, 0.18) -4.53%,
          rgba(105, 159, 255, 0.18) 46.5%
        );
        .section-roadmap__slider-item__top-quarter__number {
          -webkit-text-fill-color: unset; /* Will override color (regardless of order) */
          -webkit-text-stroke-width: unset;
          -webkit-text-stroke-color: unset;
        }
      }
      &__top {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        padding-bottom: 24px;
        justify-content: space-between;
        &-quarter {
          display: flex;
          @media screen and (max-width: 1200px) {
            flex-direction: column;
          }
          &__number {
            font-family: 'Geometria', serif;
            font-weight: 700;
            font-size: 38px;
            text-transform: uppercase;
            display: flex;
            margin-top: -6px;
            margin-right: 18px;
            &.stroked {
              span,
              h3 {
                -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: #ffffff;
              }
            }
            span {
              font-family: 'Geometria', sans-serif;
            }
          }
          &__text {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            max-width: 10vw;
            @media screen and (max-width: 1200px) {
              max-width: 100%;
              margin-top: 8px;
            }
          }
        }
      }
      &__button {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        color: #ffffff;
        padding: 9px 14px;
        height: fit-content;
        white-space: nowrap;
        &.ready {
          background: #e17b99;
        }
        &.progress {
          background: #6cac89;
        }
        &.future {
          background: rgba(153, 171, 191, 0.1);
        }
      }
      &__bottom {
        padding-top: 24px;
        &-list {
          display: grid;
          row-gap: 16px;
          &-item {
            display: flex;
            &__img {
              min-width: 23.99px;
              img {
                width: 100%;
              }
            }
            &__text {
              margin-left: 16px;
              font-weight: 400;
              font-size: 14px;
              line-height: 150%;
            }
          }
        }
      }
    }
  }
}

.ui-btn {
  &::v-deep {
    img {
      transform: rotate(-90deg);
    }
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  padding-right: 20px;
  flex-shrink: 0;
  &.swiper-slide-active {
    .section-roadmap__slider-item {
      background: linear-gradient(
        226.76deg,
        rgba(255, 162, 223, 0.18) -4.53%,
        rgba(105, 159, 255, 0.18) 46.5%
      );
      h3,
      span {
        -webkit-text-fill-color: unset; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: unset;
        -webkit-text-stroke-color: unset;
      }
    }
  }
}

.statusbar-img {
  position: absolute;
  width: 100%;
  bottom: 8%;
}
</style>
