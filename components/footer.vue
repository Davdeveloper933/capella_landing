<template>
  <div class="site-footer">
    <a href="#intro-form">
      <ui-button class="section-funds__button" :class="{'set-bottom':scrolledToTheEnd}">
        Join Private Round 2
      </ui-button>
    </a>
    <div class="container">
      <div class="site-footer__wrapper">
        <div class="site-footer__wrapper-contact">
          <div class="site-footer__wrapper-contact__title">
            contact
          </div>
          <div class="site-footer__wrapper-contact__sub-wrapper">
            <div class="site-footer__wrapper-contact__documentation">
              <h3 class="site-footer__wrapper-contact__subtitle">
                Documentation
              </h3>
              <a href="https://capella-finance-1.gitbook.io/capella.finance/"
                 target="_blank"
                 class="site-footer__wrapper-contact__documentation-item"
              >
                Governance
              </a>
              <span
                 @click="showPrivacyModal"
                 role="button"
                 class="site-footer__wrapper-contact__documentation-item"
              >
                Privacy Policy
              </span>
              <span
                 @click="showTermsModal"
                 role="button"
                 class="site-footer__wrapper-contact__documentation-item"
              >
                Terms & Conditions
              </span>
            </div>
            <div class="site-footer__wrapper-contact__social">
              <h3 class="site-footer__wrapper-contact__subtitle">
                Social
              </h3>
              <div class="site-footer__wrapper-contact__social-wrapper">
                <a target="_blank" :href="item.url" v-for="(item,indx) in social" :key="indx"
                   class="site-footer__wrapper-contact__social-item"
                >
                  <img :src="`svg/${item.img}.svg`" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__wrapper-copyright"
             v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
        >
          <div class="site-footer__wrapper-copyright__wrapper">
            <span class="site-footer__wrapper-copyright__wrapper-text">
              Capella Finance 2022 Сopyright
            </span>
            <a role="button" href="mailto:contact@capella.finance" class="contact-link">
              <span class="contact-link__text">Contact@capella.finance</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <modal style="height: 100%;" name="privacy-modal">
      <PrivacyModal />
    </modal>
    <modal name="terms-modal">
      <TermsModal />
    </modal>
  </div>
</template>

<script>
import PrivacyModal from "~/components/modals/PrivacyModal";
import TermsModal from "~/components/modals/TermsModal";
import UiButton from '~/components/ui/ui-button.global'
export default {
  name: "SiteFooter",
  components: { UiButton, TermsModal, PrivacyModal },
  data () {
    return {
      scrolledToTheEnd: false,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.50, 0.50] // [0.25, 0.75] if you want a 25% offset!
      },
      documentation: [
        {
          text:"Governance",
          url: "http://Docs.capella.finance"
        },
        {
          text:"Privacy Policy",
          url: "https://docs.google.com/document/d/1izpkn5E9vZIJvAt9ijXeujk9wfibpBMLODV9VJe-_0A/edit?usp=sharing"
        },
        {
          text:"Terms & Conditions",
          url: "https://docs.google.com/document/d/1izpkn5E9vZIJvAt9ijXeujk9wfibpBMLODV9VJe-_0A/edit?usp=sharing"
        },
      ],
      social: [
        {
          img: "twitter",
          url: "https://twitter.com/capellafinance"
        },
        {
          img: "discord",
          url: "https://discord.com/invite/mpMsNyBGw4"
        },
        {
          img: "github",
          url: "https://github.com/capellafinance"
        },
        {
          img: "medium",
          url: "https://medium.com/@capellafinance"
        },
        {
          img: "telegram",
          url: "https://t.me/capellaChannel"
        },
        {
          img: "youtube",
          url: "https://youtube.com/channel/UCT6hFbpJeZg-ry_07csogyg"
        },
        {
          img: "instagram",
          url: "https://instagram.com/capella.finance"
        },
        {
          img: "gitbook",
          url: "https://capella-finance-1.gitbook.io/capella.finance/"
        },
      ]
    }
  },
  methods: {
    showPrivacyModal () {
      this.$modal.show("privacy-modal");
    },
    hidePrivacyModal () {
      this.$modal.hide("privacy-modal");
    },
    showTermsModal () {
      this.$modal.show("terms-modal");
    },
    hideTermsModal () {
      this.$modal.hide("terms-modal");
    },
    onWaypoint ({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === "in") {
        console.log(this.$waypointMap.GOING_IN)
        this.scrolledToTheEnd = true
      }else {
        this.scrolledToTheEnd = false
      }
    },
  }
};
</script>

<style lang="scss" scoped>
  .site-footer {
    background-image: radial-gradient(129.38% 129.38% at 58.4% -47.28%, rgba(202, 121, 253, 0.78) 0%, rgba(15, 15, 55, 0.46) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 24px 24px 0px 0px;
    position: relative;
    background-color: rgba(15, 15, 55, 1);
    z-index: 3;
    margin-top: -40px;
    &__wrapper {
      &-contact {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-top: 96px;
        padding-bottom: 48px;
        @media screen and (max-width: 992px) {
          flex-direction: column;
          justify-content: unset;
        }
        @media screen and (max-width: 600px) {
          padding-bottom: 30px;
        }
        @media screen and (max-width: 320px) {
          padding-bottom: 64px;
        }
        &__sub-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          width: 56%;
          @media screen and (max-width: 1200px) {
            width: 70%;
          }
          @media screen and (max-width: 767px) {
            width: 100%;
            justify-content: flex-start;
          }
          @media screen and (max-width: 575px) {
            /*justify-content: space-between;*/
          }
          @media screen and (max-width: 320px) {
            flex-direction: column-reverse;
          }
        }
        &__title {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #ffffff;
          font-family: 'Geometria',sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 56px;
          text-transform: uppercase;
          line-height: 89%;
          @media screen and (max-width: 992px) {
            margin-bottom: 32px;
            padding-bottom: 32px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            width: 100%;
          }
          @media screen and (max-width: 767px) {
            font-size: 40px;
          }
          @media screen and (max-width: 320px) {
            text-align: center;
          }
        }
        &__documentation {
          display: flex;
          flex-direction: column;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          padding-left: 20px;
          @media screen and (max-width: 992px) {
            width: 40vw;
            border: none;
            padding-left: 0;
          }
          @media screen and (max-width: 320px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          &-item {
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            text-decoration-line: underline;
            margin-bottom: 8px;
          }
        }
        &__social {
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          padding-left: 20px;
          @media screen and (max-width: 992px) {
            border: none;
            padding-left: 0;
          }
          @media screen and (max-width: 320px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-bottom: 40px;
          }
          &-wrapper {
            display: grid;
            grid-template-columns: repeat(4,auto);
            column-gap: 16px;
            row-gap: 16px;
            @media screen and (max-width: 575px) {
              grid-template-columns: repeat(3,auto);
            }
            @media screen and (max-width: 320px) {
              grid-template-columns: repeat(4,auto);
            }
          }
          &-item {
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 40px;
            width: 40px;
            height: 40px;
            transition: .3s;
            -webkit-transition: .3s;
            -moz-transition: .3s;
            &:hover {
              transform: scale(1.1);
              -webkit-transform: scale(1.1);
              -moz-transform: scale(1.1);
            }
          }
        }
        &__subtitle {
          font-family: 'Geometria',sans-serif;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
          @media screen and (max-width: 320px) {
            text-align: center;
          }
        }
      }
      &-copyright {
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding-top: 48px;
        padding-bottom: 40px;
        &__wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media screen and (max-width: 600px) {
            flex-direction: column;
          }
          &-text {
            font-weight: 400;
            font-size: 14px;
            @media screen and (max-width: 600px) {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }

  .contact-link {
    display: inline-block;
    text-align: center;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    padding: 6px 20px;
    &:not(&-left) {
    }
    &__text {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      @media screen and (max-width: 1359px) {
        font-size: 14px;
      }
    }
  }

  .vm--container {
    &::v-deep {
      .vm--modal {
        overflow: auto;
        height: 80% !important;
        width: 85% !important;
        top: 85px !important;
        left: 0 !important;
        display: flex;
        justify-content: center;
        margin: 0 auto;
      }
    }
  }
  .section-funds__button {
    padding: 15px 40px;
    z-index: 8888;
    left: unset;
    right: 30px;
    position: fixed;
    bottom: 20px;
    white-space: nowrap;
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  .set-bottom {
    bottom: 91px;
  }
</style>
