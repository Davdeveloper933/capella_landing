<template>
  <div class="section-video" id="video">
    <div class="container">
      <div class="section-video__wrapper">
        <div class="section-video__title">
          <picture>
            <source media="(max-width:425px)" srcset="img/ellipse_mobile.png" />
            <img
              class="section-video__ellipse"
              src="img/ellipse_desktop.png"
              alt=""
            />
          </picture>
          <section-title class="small">
            watch video about
            <template #stroked-text> our invest strategy </template>
          </section-title>
        </div>
        <div class="section-video__video-block">
          <div class="section-video__video-block-content" >
            <div class="section-video__video-block-content__banner" v-if="!showVideo" @click="playVideo">
              <div class="section-video__video-block-content__banner-content">
                <img src="img/play.png" alt="">
                <span class="section-video__video-block-content__banner__text">
                  Play video
                </span>
              </div>
            </div>
<!--            <iframe-->
<!--              v-show="showVideo"-->
<!--              src="https://www.youtube.com/embed/oSzRI5y6tK4"-->
<!--              title="YouTube video player"-->
<!--              frameborder="0"-->
<!--              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
<!--              allowfullscreen-->
<!--            >-->
<!--            </iframe>-->
            <div class="iframe-wrapper">
              <youtube :width="'100%'" :height="'100%'" class="youtube" :video-id="videoId" ref="youtube"></youtube>
            </div>
          </div>
          <div class="section-video__video-block__dark-img">
            <img src="img/dark.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/ui/ui-section-title.global";
export default {
  name: "WatchVideoSection",
  components: { SectionTitle },
  data () {
    return {
      showVideo: false,
      videoId:"oSzRI5y6tK4",
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playVideo() {
      this.showVideo = true;
      this.$refs.youtube.player.playVideo()
    }
  }
};
</script>

<style lang="scss" scoped>
.section-video {
  padding-top: 73px;
  padding-bottom: 96px;
  overflow: hidden;
  &__title {
    position: relative;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
    .section-title {
      max-width: 430px;
      @media screen and (max-width: 992px) {
        width: 67vw;
        max-width: 100%;
      }
      @media screen and (max-width: 767px) {
        width: 75vw;
      }
      @media screen and (max-width: 425px) {
        width: 100%;
      }
    }
  }
  &__ellipse {
    position: absolute;
    z-index: -1;
    top: 19vh;
    left: -4vw;
    @media screen and (max-width: 425px) {
      left: -6vw;
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 992px) {
      flex-direction: column;
      width: fit-content;
      margin: 0 auto;
    }
    @media screen and (max-width: 575px) {
      width: 100%;
    }
  }
  &__video-block {
    margin-top: 115px;
    position: relative;
    width: 59%;
    &-content {
      width: 590px;
      height: 411px;
      cursor: pointer;
      transition: opacity .3s;
      opacity: 1;
      .iframe-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      &::v-deep {
        iframe {
          border-radius: 16px;
          width: 100%;
          height: 100%;
        }
      }
      @media screen and (max-width: 1092px) {
        width: 100%;
      }
      @media screen and (max-width: 767px) {
        //width: 530px;
        width: 100%;
      }
      @media screen and (max-width: 575px) {
        height: 300px;
      }
      &__banner {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        background-image: url("assets/banner.jpg");
        background-size: cover;
        border-radius: 16px;
        background-color: rgba(17, 18, 26, 0.56);
        background-blend-mode: overlay;
        &__text {
          text-align: center;
          margin-top: 14px;
          font-family: 'Geometria',sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-align: center;
          letter-spacing: -0.02em;
        }
        &-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
    @media screen and (max-width: 992px) {
      width: 100%;
      margin-top: 50px;
      //display: flex;
      //justify-content: center;
    }
    &__dark-img {
      position: absolute;
      top: 49%;
      right: 0;
      z-index: -1;
      @media screen and (max-width: 425px) {
        top: 49%;
        right: -26vw;
      }
      @media screen and (max-width: 992px) {
        right: -21vw;
        top: 71%;
      }
      @media screen and (max-width: 1092px) {
        top: 55%;
        right: -6vw;
      }
      @media screen and (max-width: 1200px) {
        top: 67%;
        right: -12vw;
      }
    }
  }
}
</style>
