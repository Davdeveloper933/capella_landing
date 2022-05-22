<template>
  <div
    ref="header"
    class="site-header"
    :class="{
      opened: menuIsOpen,
      'opened-mobile': mobileMenuIsOpen,
      closed: !menuIsOpen,
      'headroom--unpinned': scrolled,
    }"
    @scroll="handleScroll"
  >
    <div class="site-header__wrapper">
      <div class="site-header__logo site-header-item site-header__logo-desktop">
        <a href="/">
          <img src="svg/logo.svg" alt="" />
        </a>
      </div>
      <div class="site-header__logo site-header__logo-mobile">
        <a href="/" class="site-header__logo-mobile__link">
          <img src="svg/logo-text.svg" alt="" />
        </a>
      </div>
      <div class="site-header__logo site-header__logo-tablet">
        <a href="/">
          <img src="svg/logo-text.svg" alt="" />
        </a>
      </div>
      <div class="menu-btn-container site-header-item">
        <div class="site-header-item contact-link-block">
          <a role="button" href="mailto:contact@capella.finance" class="contact-link">
            <span class="contact-link__text">Contact@capella.finance</span>
          </a>
        </div>
      </div>
      <div class="desktop-menu-btn">
      </div>
      <div class="tablet-menu-btn">
        <button class="menu-btn rounded" @click="closeDesktopMenu">
          <img v-if="!menuIsOpen" src="svg/menu-open.svg" alt="" />
          <img v-else src="svg/menu-close.svg" alt="" />
        </button>
      </div>
      <div class="mobile-btn-container">
        <button
          class="menu-btn rounded"
          @click="mobileMenuIsOpen = !mobileMenuIsOpen"
        >
          <img v-if="!mobileMenuIsOpen" src="svg/menu-open.svg" alt="" />
          <img v-else src="svg/menu-close.svg" alt="" />
        </button>
      </div>
    </div>
    <div v-show="menuIsOpen" class="menu-opened menu-opened-desktop">
      <div class="menu-opened__content">
        <a
          v-for="(item, indx) in menuItems"
          :key="indx"
          class="menu-opened__link"
          :href="item.url"
          @click="closeDesktopMenu"
        >
          {{ item.label }}
        </a>
        <a href="#intro-form" @click="closeDesktopMenu">
          <ui-button>Join Whitelist</ui-button>
        </a>
      </div>
    </div>
    <div v-show="mobileMenuIsOpen" class="menu-opened-mobile">
      <img class="menu-opened-mobile-line" src="svg/line.svg" alt="" />
      <div class="menu-opened-mobile__content">
        <a
          v-for="(item, indx) in menuItems"
          :key="indx"
          class="menu-opened-mobile__link"
          :href="item.url"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
      </div>
      <img class="menu-opened-mobile-line" src="svg/line.svg" alt="" />
      <div class="menu-opened-mobile__buttons">
        <a href="#intro-form" @click="closeMobileMenu">
          <ui-button>Join Whitelist</ui-button>
        </a>
        <a href="mailto:contact@capella.finance">
          <ui-button class="menu-opened-mobile__buttons-contact">
            contact@capella.finance
          </ui-button>
        </a>
      </div>
    </div>
    <div v-show="menuIsOpen" class="menu-opened menu-opened-tablet">
      <div class="menu-opened__content">
        <a
          v-for="(item, indx) in menuItems"
          :key="indx"
          class="menu-opened__link"
          :href="item.url"
          @click="closeDesktopMenu"
        >
          {{ item.label }}
        </a>
        <a href="#intro-form" @click="closeDesktopMenu">
          <ui-button>Join Whitelist</ui-button>
        </a>
        <a href="mailto:contact@capella.finance">
          <ui-button class="menu-opened-mobile__buttons-contact"
          >Contact@capella.finance</ui-button
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { menuItems } from "~/global/consts";
import UiButton from "~/components/ui/ui-button.global";
export default {
  name: "SiteHeader",
  components: { UiButton },
  data() {
    return {
      menuItems,
      menuIsOpen: false,
      mobileMenuIsOpen: false,
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0,
      headerOffsetHeight: null,
    };
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    closeDesktopMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    closeMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    },
    handleScroll() {
      this.headerOffsetHeight = this.$refs.header.offsetHeight;
      if (window.scrollY > this.headerOffsetHeight) {
        this.scrolled = true;
      } else if (
        window.scrollY > 0 &&
        window.scrollY < this.headerOffsetHeight
      ) {
        this.scrolled = false;
      }

      this.lastPosition = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>

.site-header {
  position: fixed;
  width: 100%;
  height: 69px;
  top: 0;
  z-index: 9999;
  overflow: hidden;
  transition: all 0.3s ease-out;
  background-color: transparent;
  background-image: unset;
  &.headroom {
    will-change: transform;
    transition: transform 200ms linear;
  }
  &.headroom--unpinned {
    transform: translateY(0%);
    background-color: #161c2e;
    background-image: linear-gradient(
        0deg,
        rgba(13, 14, 21, 0.56),
        rgba(13, 14, 21, 0.56)
      ),
      radial-gradient(
        129.71% 129.71% at 50% 1.86%,
        rgba(178, 96, 230, 0.648) 0%,
        rgba(0, 0, 0, 0) 100%
      );
  }
  &.headroom--pinned {
    transform: translateY(-100%);
  }
  &-item {
    /*min-width: 230px;*/
    @media screen and (max-width: 1090px) {
      min-width: 144px;
    }
    @media screen and (max-width: 767px) {
      min-width: unset;
    }
    &.contact-link-block {
      text-align: right;
    }
  }
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 120px;
    @media screen and (max-width: 1359px) {
      padding: 16px 36px 39px 36px;
    }
    @media screen and (max-width: 991px) {
      padding: 16px 35px;
    }
    @media screen and (max-width: 767px) {
      justify-content: space-between;
    }
    @media screen and (max-width: 500px) {
      padding: 16px;
    }
  }
  &__logo {
    &-desktop {
      flex: auto;
      display: flex;
      justify-content: flex-start;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    &-mobile {
      display: none;
      @media screen and (max-width: 425px) {
        display: inline-block;
      }
      &__link {
        @media screen and (max-width: 375px) {
          width: 55vw;
          display: block;
        }
      }
    }
    &-tablet {
      //min-width: 208px;
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
      }
      @media screen and (max-width: 425px) {
        display: none;
      }
    }
  }
  &.closed {
    //position: relative;
    //height: 0%;
    //width: 100%;
    //overflow: hidden;
  }
  &.opened {
    background-color: #161c2e;
    background-image: linear-gradient(
        0deg,
        rgba(13, 14, 21, 0.56),
        rgba(13, 14, 21, 0.56)
      ),
      radial-gradient(
        129.71% 129.71% at 50% 1.86%,
        rgba(178, 96, 230, 0.648) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 9999;
    overflow-y: auto;
    .site-header__wrapper {
      align-items: center;
      @media screen and (max-width: 767px) {
        align-items: baseline;
      }
      @media screen and (max-width: 425px) {
        align-items: center;
      }
    }
    &-mobile {
      background-color: #161c2e;
      background-image: linear-gradient(
          0deg,
          rgba(13, 14, 21, 0.56),
          rgba(13, 14, 21, 0.56)
        ),
        radial-gradient(
          129.71% 129.71% at 50% 1.86%,
          rgba(178, 96, 230, 0.648) 0%,
          rgba(0, 0, 0, 0) 100%
        );
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      z-index: 9999;
      overflow-y: auto;
      @media screen and (max-width: 425px) {
        .site-header__wrapper {
          align-items: center;
          padding: 16px;
        }
      }
    }
    &-desktop {
    }
  }
}

.menu-btn {
  position: relative;
  display: flex;
  background: rgba(23, 17, 46, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 9px 24px;
  &.rounded {
    border-radius: 50%;
    padding: 6px;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
  }
  &-container {
    position: relative;
    //position: absolute;
    //left: 50%;
    //transform: translate(-50%, 0);
    flex-direction: column;
    display: flex;
    align-items: center;
  }
  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
    @media screen and (max-width: 1359px) {
      font-size: 14px;
    }
  }
  &__icon_close {
  }
}

.contact-link {
  display: inline-block;
  text-align: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 9px 30px;
  &:not(&-left) {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 8px;
    @media screen and (max-width: 1359px) {
      font-size: 14px;
    }
  }
}

.menu-opened {
  height: 100%;
  width: 100%;
  /*overflow-x: hidden;*/
  transition: 0.5s;
  padding-top: 62px;
  font-weight: 400;
  font-size: 20px;
  /*margin-bottom: 39px;*/
  @media screen and (max-width: 767px) {
    /*overflow-y: auto;*/
  }
  &-desktop {
    /*padding-bottom: 39px;*/
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &-tablet {
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
    }
    @media screen and (max-width: 425px) {
      display: none;
    }
    .ui-button {
      max-width: 245px;
      display: flex;
      justify-content: center;
    }
  }
  .ui-button {
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
  }
  &__link {
    margin-bottom: 36px;
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
  &-mobile {
    display: none;
    justify-content: center;
    flex-direction: column;
    padding: 0 16px 40px 16px;
    @media screen and (max-width: 425px) {
      display: flex;
    }
    &__link {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 36px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 40px;
    }
    &__buttons {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 40px 50px 0 50px;
      @media screen and (max-width: 400px) {
        padding: 40px 40px 0 40px;
      }
      @media screen and (max-width: 375px) {
        padding: 40px 30px 0 30px;
      }
      a {
        display: block;
        width: 100%;
      }
      .ui-button {
        font-size: 14px;
        padding: 14px 0;
        width: 100%;
      }
      &-contact {
        background-image: unset !important;
        background-color: transparent !important;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin-top: 16px;
      }
    }
  }
}

.mobile-btn-container {
  display: none;
  @media screen and (max-width: 425px) {
    display: block;
  }
}

.desktop-menu-btn {
  @media screen and (max-width: 767px) {
    display: none;
  }
}

.tablet-menu-btn {
  flex: auto;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 767px) {
    display: block;
    flex: unset;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
}
</style>
