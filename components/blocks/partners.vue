<template>
  <div id="partners" class="partners  section-padding-top section-padding-bottom">
    <div class="bg circle-bg circle-bg--big">
      <div>
        <picture>
          <source media="(max-width: 375px)" srcset="img/neon_small.png" />
          <img class="neon-img" src="img/neon.png" alt="" />
        </picture>
      </div>
    </div>
    <div class="container">
      <section-title class="small">
        partners
      </section-title>
      <div class="cards-wrapper">
        <a target="_blank" :href="partner.url" class="card d-block" v-for="(partner,indx) in partners" :key="indx">
          <img :src="`img/partners/${partner.img}`" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import SectionTitle from '~/components/ui/ui-section-title.global'
  export default {
    name: 'partners',
    components: { SectionTitle },
    data () {
      return {
        partners: [
          // {
          //   img: 'fedex'
          // },
          // {
          //   img: 'dpd'
          // },
          // {
          //   img: 'google'
          // },
          // {
          //   img: 'oyo'
          // },
          {
            img: 'bosnart.png',
            url: 'https://bosnart.ch/'
          },
          {
            img: 'paynt.svg',
            url: 'https://paynt.com/'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .partners {
    margin-top: -20px;
    position: relative;
    background-image: url("~/assets/partners_bg.png");
    background-size: cover;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 24px;
    padding-bottom: 190px;
    @media screen and (max-width: 992px) {
      padding-bottom: 130px;
    }
    .cards-wrapper {
      margin-top: 48px;
      display: flex;
      gap: 10px;
      @media screen and (max-width: 992px) {
        flex-wrap: wrap;
      }
      @media screen and (max-width: 576px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      .card {
        background: #322F57;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        cursor: pointer;
        padding: 40px 0;
        transition: .3s all;
        &:hover {
          transform: scale(1.02);
          -webkit-transform: scale(1.02);
        }
        @media screen and (max-width: 992px) {
          width: 30%;
        }
        @media screen and (max-width: 576px) {
          width: 48%;
        }
        @media screen and (max-width: 375px) {
          width: 100%;
        }
        img {
          max-width: 107px;
        }
      }
    }
    .absolute-img {
      position: absolute;
      top: 0;
      right: 0;
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
    .circle-bg--big {
      bottom: -59px;
      top: unset;
      width: 100%;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 375px) {
        bottom: -70px;
      }
    }
  }

  .neon-img {
    transform: translate(-50%,0);
    -webkit-animation: rotation 25s linear infinite;
    animation: rotation 25s linear infinite;
  }
</style>
