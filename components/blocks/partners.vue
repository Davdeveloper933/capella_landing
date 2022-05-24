<template>
  <div id="partners" class="partners  section-padding-top section-padding-bottom">
    <picture>
      <source media="(max-width: 375px)" srcset="img/neon_small.png" />
      <img class="neon-img" src="img/neon.png" alt="" />
    </picture>
    <div class="container">
      <section-title class="small">
        partners
      </section-title>
      <div class="cards-wrapper">
        <div class="card" v-for="(partner,indx) in partners" :key="indx">
          <img :src="`img/partners/${partner.img}.png`" alt="">
        </div>
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
          {
            img: 'fedex'
          },
          {
            img: 'dpd'
          },
          {
            img: 'google'
          },
          {
            img: 'oyo'
          },
          {
            img: 'bosnart'
          },
          {
            img: 'paynt'
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
          @media screen and (max-width: 1200px) {
              max-width: 65px;
          }
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
  }

  .neon-img {
    position: absolute;
    left: 50%;
    bottom: -35px;
    transform: translate(-50%,0);
    @media screen and (max-width: 413px) {
      bottom: -7px;
    }
  }
</style>
